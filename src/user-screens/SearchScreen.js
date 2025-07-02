import React, { useEffect } from "react";

import TabHeader from "../domain/Search/TabHeader";
import BreadCrumb from "../domain/BreadCrumb/BreadCrumb";
import Filters from "../domain/Filters/Filters";
import SearchItem from "../domain/ListItem/SearchItem";
import "../domain/Search/style.css";
import { useProduct } from "../contexts";
import NoResultsFound from "components/NoResultFound";
import { getURLParams } from "utils/Helper";

function SearchScreen({}) {
  const { getProductSearchData, searchData } = useProduct();

  useEffect(() => {}, []);

  return (
    <div className="col-12">
      <div className="" style={{ padding: 10 }}>
        <div className="row offset-md-2">
          <div className="col-3 col-md-2">
            <Filters />
          </div>
          <div className="col-9 col-md-8 productList" style={{ padding: 0 }}>
            <BreadCrumb className="ps-3" />
            <div>
              <h5 className="pt-1 ps-3">
                <small className="">
                  Showing 1 – 8 products of 8 products results for "
                  {getURLParams("search")}"
                </small>
              </h5>
              <div className="row">
                <div className="col-12">
                  <div className="">
                    <TabHeader />

                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active p-3"
                        id="one"
                        role="tabpanel"
                        aria-labelledby="one-tab"
                      >
                        {searchData.docs.length > 0 ? (
                          searchData.docs.map((doc, index) => {
                            return (
                              <SearchItem
                                key={`search_item_${index}`}
                                {...doc}
                              />
                            );
                          })
                        ) : (
                          <NoResultsFound />
                        )}
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
