import React, { useEffect } from 'react';

import TabHeader from '../domain/Search/TabHeader';
import BreadCrumb from '../domain/BreadCrumb/BreadCrumb';
import Filters from '../domain/Filters/Filters';
import SearchItem from '../domain/ListItem/SearchItem';
import '../domain/Search/style.css';
import { useProduct } from '../contexts';
import NoResultsFound from 'components/NoResultFound';

function SearchScreen({ heading }) {

  const { getProductSearchData, searchData } = useProduct();

  useEffect(() => {

  }, [])

  return (
    <div className="col-12">
      <div className="" style={{ padding: 10 }}>
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9 productList" style={{ padding: 0 }}>
            <BreadCrumb />
            <div>
              <h5 className="pddh-15 pt-2">
                {heading}
                <small className='pl-1'>(Showing 1 – 8 products of 8 products)</small>
              </h5>
              <div className="row">
                <div className="col-12">
                  <div className="mt-3 ">
                    <TabHeader />

                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active p-3"
                        id="one"
                        role="tabpanel"
                        aria-labelledby="one-tab">
                        {
                          searchData.length > 0 ? searchData.docs.map((doc, index) => {
                            return <SearchItem key={`search_item_${index}`} {...doc} />
                          }) : <NoResultsFound />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchScreen.propTypes = {};

export default SearchScreen;