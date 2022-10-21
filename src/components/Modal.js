import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

function ModalExample(props) {
  const { buttonLabel, className, title, toggle, modal, data } = props;

  const capitalizeFirstLetter = (string) =>
    string?.split('_').join(' ').charAt(0).toUpperCase() + string?.split('_').join(' ').slice(1);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h4 className="m-0">{capitalizeFirstLetter(title)}</h4>
        </ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th className="text-center">Sr No.</th>
                <th className="text-center">Name</th>
                <th className="text-center">Is Active</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((o, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{o.name}</td>
                  <td className="text-center">{o.is_active}</td>
                  <td className="text-center">
                    <Button className="btn-icon mr-2" color="primary">
                      <i className="tim-icons icon-pencil" title="Edit" />
                    </Button>
                    <Button className="btn-icon mr-2" color="danger">
                      <i className="tim-icons icon-trash-simple" title="Edit" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;
