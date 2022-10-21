import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Table,
  Row,
  Col,
  CardFooter,
  Button,
  FormGroup,
  Form,
  Input
} from 'reactstrap';
import NotificationAlert from 'react-notification-alert';

import Dropdown from './Dropdown';
import { Notification } from '../utils';

// By default, it will render header names by capitalizing the actual keys in object, Will remove _, Capitalize case
// If customized header name is required,
// Button Labels required
// If anyone wants to add prefix/suffix for values in rows,
// Every page number click will call api and get data
// SortBy - to specific field
// FilterBy -
// Set No Records found component

const getActionIcons = (key) => {
  switch (key) {
    case 'delete':
      return 'icon-trash-simple';
    case 'edit':
      return 'icon-pencil';
    case 'pay':
      return 'icon-camera';
    case 'view':
      return 'icon-alert-circle-exc';
    default:
      break;
  }
};

function Grid({
  tableLabel = '',
  objectKeyNames,
  headerLabels,
  contentData,
  buttonLabels = ['edit', 'delete'],
  totalPages = 0,
  currentPage = 0,
  totalContentCount = 0,
  limit = 10,
  filterOptions = [],
  onSortSelect,
  onFilterSelect,
  onSearch,
  onPress,
  updateCurrentPage,
  handleAllCheckboxes,
  download,
  checkedAll,
  handleSingleCheckboxes,
  isPayButton,
  checkBoxRequired,
  srNoRequired,
  createCampaignReq
}) {
  const [search, setSearch] = useState('');
  const getHeader = () => {
    const header = [];

    // Adding Checkboxes
    if (checkBoxRequired) {
      header.push(
        <th className="text-center" style={{ width: '75px' }}>
          <input type="checkbox" onChange={handleAllCheckboxes} checked={checkedAll} />
        </th>
      );
    }

    if (srNoRequired) {
      // Adding Sr no
      header.push(
        <th className="text-center" style={{ width: '75px' }}>
          Sr No
        </th>
      );
    }

    // Adding Header Labels
    if (headerLabels.length == 0) {
      header.push(
        objectKeyNames.map((i, index) => (
          <th key={`header-${index + 1}`} style={{ maxWidth: '200px' }}>
            {i.split('_').join(' ')}
          </th>
        ))
      );
    } else {
      header.push(
        headerLabels.map((i, index) => (
          <th className="text-center" key={`header-${index + 1}`} style={{ maxWidth: '200px' }}>
            {i}
          </th>
        ))
      );
    }

    // Adding BUTTON Labels
    if (buttonLabels.length > 0) {
      header.push(
        <th className="text-center" key={`header-${objectKeyNames.length + 2}`}>
          Action
        </th>
      );
    }
    return header;
  };

  const getRows = () => {
    const contentRows = [];
    // Adding Srno
    return (
      contentData?.length > 0 &&
      contentData?.map((content, contentDataindex) => (
        <tr key={`contentData-${contentDataindex + 1}`}>
          {checkBoxRequired && (
            <td className="text-center" key={`contentDataindexw${1}`}>
              <input
                type="checkbox"
                checked={content.checked}
                onChange={(event) => handleSingleCheckboxes(event, contentDataindex)}
              />
            </td>
          )}
          {srNoRequired && (
            <td className="text-center" key={contentDataindex + 1}>
              {currentPage === 1
                ? contentDataindex + 1
                : (currentPage - 1) * limit + (contentDataindex + 1)}
            </td>
          )}
          {objectKeyNames.map((j, obkeyindex) => (
            <td key={`objectKeyNames-${obkeyindex + 2}`}>{content[j]}</td>
          ))}
          {buttonLabels.length > 0 && (
            <td key="buttonLabels-0" className="text-center">
              {buttonLabels.map((name, buttonLabelsindex) => (
                <Action
                  key={`buttonLabels-${buttonLabelsindex + 1}`}
                  rowData={content}
                  name={name}
                  onPress={onPress}
                />
              ))}
            </td>
          )}
        </tr>
      ))
    );
  };

  const getPagination = () => {
    const pagination = [];
    // if (currentPage > 1) {
    //   pagination.push(<Button className='pr-3 pl-3 me-4' disabled={currentPage === totalPagesIndex + 1} key={totalPagesIndex + 1}>
    //     {(totalPagesIndex + 1)}
    //   </Button>
    // }
    for (let totalPagesIndex = 0; totalPagesIndex < totalPages; totalPagesIndex++) {
      pagination.push(
        <Button
          className="pr-3 pl-3 me-4"
          disabled={currentPage === totalPagesIndex + 1}
          key={totalPagesIndex + 1}
          onClick={() => updateCurrentPage(totalPagesIndex + 1)}
          style={{ color: `${currentPage === totalPagesIndex + 1 && 'white'}` }}
        >
          {totalPagesIndex + 1}
        </Button>
      );
    }
    return pagination;
  };

  const onClick = (action, id) => {
    localStorage.setItem('tempGridItem', JSON.stringify());
    onPress(action, id);
  };

  const notificationAlertRef = React.useRef(null);

  return (
    <Card>
      <NotificationAlert ref={notificationAlertRef} />
      <CardHeader>
        <Row>
          <Col className="pr-md-1" md="10">
            <CardTitle tag="h4">{tableLabel}</CardTitle>
          </Col>
          <Col className="pr-md-1 " md="2">
            <Button className="btn-simple" color="primary" onClick={download}>
              <i className="tim-icons icon-cloud-download-93 mr-2" />
              Download
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col className="pr-md-1" md="3">
            <InputGroup>
              <Input
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <InputGroupAddon addonType="prepend">
                <Button
                  className="btn-icon m-0 rounded-end"
                  color="primary"
                  onClick={() => {
                    if (search != '' && search.length >= 3) {
                      onSearch(search, null);
                    } else {
                      Notification({
                        notificationAlertRef,
                        message: 'Please enter atleast 3 characters to search.',
                        type: 'danger'
                      });
                    }
                  }}
                >
                  <i className="tim-icons icon-zoom-split" title="Search" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="pr-md-1 me-5" md="1">
            <Dropdown label="Filter By" options={filterOptions} onSelect={onFilterSelect} />
          </Col>
          <Col className="pr-md-1 " md="1">
            <Dropdown label="Sort By" options={[...objectKeyNames]} onSelect={onSortSelect} />
          </Col>
          <Col className="pr-md-1 " md="4" />
          <PageTextBox
            currentPage={currentPage}
            totalPages={totalPages}
            updateCurrentPage={updateCurrentPage}
          />
        </Row>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>{getHeader()}</tr>
          </thead>
          <tbody>{getRows()}</tbody>
        </Table>
        {checkedAll && isPayButton && (
          <Row>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <Button>₹</Button>
              <Button>
                <i className="tim-icons icon-trash-simple" title="icon-trash-simple" />
              </Button>
            </Col>
          </Row>
        )}
      </CardBody>
      <CardFooter className="text-center">{getPagination()}</CardFooter>
    </Card>
  );
}

function PageTextBox({ currentPage, totalPages, updateCurrentPage }) {
  const [pageNum, setPageNum] = useState(currentPage);

  useEffect(() => setPageNum(currentPage), [currentPage]);

  const notificationAlertRef = React.useRef(null);

  return (
    <Col className="pr-md-1 d-inline" md="2">
      <NotificationAlert ref={notificationAlertRef} />
      <Row>
        <Col className="pr-md-1 d-inline" md="6">
          <Input
            className="border-top-0 border-left-0 border-right-0 border-bottom-1 rounded-0 text-center"
            placeholder="Page Number"
            type="text"
            value={pageNum}
            onChange={(e) => {
              setPageNum(e.target.value);
            }}
            onKeyUp={(e) => {
              const tempPageNum = Number(e.nativeEvent.target.value);
              if (e.keyCode === 13 && tempPageNum !== NaN) {
                if (tempPageNum <= totalPages) {
                  updateCurrentPage(tempPageNum);
                } else {
                  Notification({
                    notificationAlertRef,
                    message: 'Please enter valid page number',
                    type: 'danger'
                  });
                  setPageNum(currentPage);
                }
              }
            }}
            style={{ fontSize: 16 }}
          />
        </Col>
        <Col className="pr-md-1 d-inline text-center align-middle pt-2" md="6">
          <div style={{ fontSize: 16, verticalAlign: 'center' }}> / {totalPages} Pages</div>
        </Col>
      </Row>
    </Col>
  );
}

function Action({ onPress, rowData, name }) {
  const onClick = (actionType) => {
    if (actionType === 'delete') {
      const r = window.confirm('Are you sure, you want to delete?');
      if (r == false) {
        return true;
      }
    }
    localStorage.setItem('tempGridItem', JSON.stringify());
    onPress(name, rowData);
  };
  return (
    <Button
      className="btn-icon mr-2"
      color={name === 'delete' ? 'danger' : name === 'view' ? 'light' : 'primary'}
      onClick={(event) => {
        event.preventDefault();
        onClick(name);
      }}
    >
      {name === 'pay' ? '₹' : <i className={`tim-icons ${getActionIcons(name)}`} title={name} />}
    </Button>
  );
}

export default Grid;
