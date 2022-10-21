import React from 'react';
import { Constants } from "../../utils";

const SortItemComponent = ({ name, index, disabled }) => {
  return (
    <li className="nav-item">
      <a
        className={(disabled ? 'disabled text-dark ' : '') + "nav-link"}
        id={`sort-tab-${index}`}
        data-toggle="tab"
        href={`#${index}`}
        role="tab"
        aria-controls={`#${index}`}
        aria-selected="false">
        {name}
      </a>
    </li>
  )
}

const SortOptionList = () => {
  return Constants.SORTOPTIONS.map((sortItem, index) =>
    <SortItemComponent name={sortItem.name} key={`SortItemList${index}`} disabled={index == 0} />
  )
}


export default SortOptionList;