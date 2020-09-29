import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Filters from "../../components/Filters/Filters";
import SearchItem from "../../components/ListItem/SearchItem";
import './style.css';

function GetRandom(props) {
    return <div>{Math.random()}</div>;
}

const Search = () => (
    <div className="col-12" >
        <div className="" style={{ background: "#e0e0e0", padding: 10 }}>
            <div className="row" >
                <div className="col-3">
                    <Filters ref={(input) => { this.textInput = input; }} />
                </div>
                <div className="col-9 productList" style={{ padding: 0 }}>
                    <BreadCrumb />
                    {GetRandom()}
                    <div>
                        <h5 className="pddh-15">Top Budget Laptops <small>(Showing 1 – 8 products of 8 products)</small></h5>
                        <div className="row">
                            <div className="col-12">
                                <div className="mt-3 ">
                                    <div className="tab-card-header">
                                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link disabled text-dark" href="#">Sort By</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Popularity</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Price -- Low to High</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Price -- High to Low</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Newest First</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                            <SearchItem />
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

)

Search.propTypes = {

};

export default Search;