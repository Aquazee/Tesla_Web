import React, { useEffect } from 'react';

import { Constants } from "../../utils";
import { useProduct } from '../../contexts';

const SortItemComponent = ({ name, type, field, index, disabled }) => {
  const { getProductSearchData, searchData } = useProduct();

  useEffect(() => {
    load()
  })

  const load = () => {
    if (!searchData) {
      let urlParams = new URLSearchParams(window.location.search);
      getProductSearchData(urlParams)
    }
  }

  const onSort = () => {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sort_field', field)
    urlParams.set('sort_type', type)
    getProductSearchData(urlParams)
  }

  return (
    <li className="nav-item">
      <a
        className={(disabled ? 'disabled text-dark ' : '') + "nav-link"}
        id={`sort-tab-${index}`}
        data-toggle="tab"
        href={`#${index}`}
        role="tab"
        aria-controls={`#${index}`}
        aria-selected="false"
        onClick={onSort}>
        {name}
        
      </a>
    </li>
  )
}

const SortOptionList = () => {
  return Constants.SORTOPTIONS.map((sortItem, index) =>
    <SortItemComponent {...sortItem} key={`SortItemList${index}`} disabled={index === 0} />
  )
}


export default SortOptionList;