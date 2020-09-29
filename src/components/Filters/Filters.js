import React, { useEffect } from "react";
import "./filters.css";

const ProcessorBrand = ["Intel", "Amd"];
const Processor = ["Core i5", "Core i7", "Core i9", "Core m3"];
const Brand = ["Apple", "Microsoft", "Dell", "Asus"];
const Os = ["Windows", "Mac Os", "Linux", "Fedora"];
const Ram = ["4", "8", "16", "Integrated"];
const Graphics = ["4", "8", "16", "Integrated"];
const Type = ["Thin and Light Laptop", "Laptop"];
const Offers = ["Bank Offer", "Exchange Offer", "No Cost EMI", "Special Price"];
const CustomerRatings = ["1", "2", "3", "4", "5"];
const Filters = () => {
    return (<div id="filter" className="filter_Sect">
        <ul className="">
            <li className="filter_title pddh-15 mt-0">
                Filters
        </li>
            <li className="text-uppercase " data-toggle="collapse" href="#ProcessorBrand" role="button" aria-expanded="false" aria-controls="collapseExample">Processor</li>
            <div className="collapse" id="ProcessorBrand">
                {ProcessorBrand.map((i) => {
                    return <div key={i} className="form-check">
                        <input type="checkbox" className="form-check-input" id={"ProcessorBrand" + i} value={i} />
                        <label className="form-check-label" htmlFor={"ProcessorBrand" + i}>{i}</label>
                    </div>
                })}
            </div>
            <li className="text-uppercase" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">Price
        <div className="collapse filter_divs font-weight-normal" id="collapseExample1">
                    <div data-role="main" className="ui-content">
                        <form method="post" action="/action_page_post.php">
                            <input
                                type="text"
                                name="somename"
                                data-provide="slider"
                                data-slider-ticks="[1, 2, 3]"
                                data-slider-ticks-labels='["short", "medium", "long"]'
                                data-slider-min="1"
                                data-slider-max="3"
                                data-slider-step="1"
                                data-slider-value="3"
                                data-slider-tooltip="hide"
                            />
                            <input type="submit" data-inline="true" value="Submit" />
                        </form>
                    </div>
                </div>
            </li>

            <li className="text-uppercase " data-toggle="collapse" href="#Processor" role="button" aria-expanded="false" aria-controls="Processor">Processor</li>
            <div className="collapse font-weight-normal" id="Processor">
                {Processor.map((i) => {
                    return <div key={i} className="form-check">
                        <input type="checkbox" className="form-check-input" id={"Processor" + i} value={i} />
                        <label className="form-check-label" htmlFor={"Processor" + i}>{i}</label>
                    </div>
                })}
            </div>
            <li className="text-uppercase " data-toggle="collapse" href="#Brand" role="button" aria-expanded="false" aria-controls="Brand">Brand</li>
            <div className="collapse font-weight-normal" id="Brand">
                {Brand.map((i) => {
                    return <div key={i} className="form-check">
                        <input type="checkbox" className="form-check-input" id={"Brand" + i} value={i} />
                        <label className="form-check-label" htmlFor={"Brand" + i}>{i}</label>
                    </div>
                })}
            </div>
            <li className="text-uppercase " data-toggle="collapse" href="#Os" role="button" aria-expanded="false" aria-controls="Os">Operating System</li>
            <div className="collapse font-weight-normal" id="Os">
                {Os.map((i) => {
                    return <div key={i} className="form-check">
                        <input type="checkbox" className="form-check-input" id={"Os" + i} value={i} />
                        <label className="form-check-label" htmlFor={"Os" + i}>{i}</label>
                    </div>
                })}
            </div>
            <li className="text-uppercase " data-toggle="collapse" href="#Ram" role="button" aria-expanded="false" aria-controls="Ram">Ram</li>
            <div className="collapse font-weight-normal" id="Ram">
                {Ram.map((i) => {
                    return <div key={i} className="form-check">
                        <input type="checkbox" className="form-check-input" id={"Ram" + i} value={i} />
                        <label className="form-check-label" htmlFor={"Ram" + i}>{i}</label>
                    </div>
                })}
            </div>
        </ul>
    </div>
    )
};

Filters.propTypes = {
};

export default Filters;
