import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Dropdown({ label = 'Select', options = [], onSelect }) {
  const [selected, setSelected] = useState(label);
  const onSelectDD = (filterName) => {
    setSelected(filterName);
    onSelect(filterName);
    // if (filterName === label)
    //   onSelect(filterName)
  };

  if (options.indexOf(label) == -1) {
    options.unshift(label);
  }

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret data-toggle="dropdown" style={{fontSize:12, background: 'transparent', color:'black', border: '0px'}}>
        {capitalizeFirstLetter(selected.split('_').join(' '))}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((filterName, filterIndex) => (
          <DropdownItem
          style={{fontSize:12}}
            key={filterIndex}
            value={filterName}
            tabIndex={filterIndex}
            onClick={() => onSelectDD(filterName)}>
            {filterName.split('_').join(' ').toUpperCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default Dropdown;
