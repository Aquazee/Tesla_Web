import React from 'react';
import SortOptionList from './SortOptionList';

const TabHeader = () => {
  return (
    <div className="tab-card-header">
      <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
        <SortOptionList />
      </ul>
    </div>
  );
}

export default TabHeader;