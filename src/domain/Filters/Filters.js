import React, { useEffect, useState } from "react";
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
  const [minPrice, setMinPrice] = useState("₹5000");
  const [maxPrice, setMaxPrice] = useState("₹75000+");
  const onPriceChange = () => {};

  const onMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const onMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  return (
    <div id="filter" className="filter_Sect">
      <ul className="">
        <li className="filter_title pddh-15 mt-0">Filters</li>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#ProcessorBrand"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Processor
        </li>
        <div className="collapse" id="ProcessorBrand">
          {ProcessorBrand.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`ProcessorBrand${i}`}
                value={i}
              />
              <label
                className="form-check-label"
                htmlFor={`ProcessorBrand${i}`}
              >
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase"
          data-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          Price
        </li>
        <div
          className="collapse filter_divs font-weight-normal d-flex justify-content-between align-items-center"
          id="collapseExample1"
        >
          <select
            id="min-price"
            value={minPrice}
            className="custom-select custom-select-sm"
            onChange={onMinPriceChange}
          >
            <option value="5000">₹5000</option>
            <option value="20000">₹20000</option>
            <option value="30000">₹30000</option>
          </select>
          <span className="mx-2">to</span>
          <select
            id="max-price"
            value={maxPrice}
            className="custom-select custom-select-sm"
            onChange={onMaxPriceChange}
          >
            <option value="60000">₹60000</option>
            <option value="70000">₹70000</option>
            <option value="75000+">₹75000+</option>
          </select>
        </div>

        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Processor"
          role="button"
          aria-expanded="false"
          aria-controls="Processor"
        >
          Processor
        </li>
        <div className="collapse font-weight-normal" id="Processor">
          {Processor.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Processor${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Processor${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Brand"
          role="button"
          aria-expanded="false"
          aria-controls="Brand"
        >
          Brand
        </li>
        <div className="collapse font-weight-normal" id="Brand">
          {Brand.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Brand${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Brand${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Os"
          role="button"
          aria-expanded="false"
          aria-controls="Os"
        >
          Operating System
        </li>
        <div className="collapse font-weight-normal" id="Os">
          {Os.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Os${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Os${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Ram"
          role="button"
          aria-expanded="false"
          aria-controls="Ram"
        >
          Ram
        </li>
        <div className="collapse font-weight-normal" id="Ram">
          {Ram.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Ram${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Ram${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Graphics"
          role="button"
          aria-expanded="false"
          aria-controls="Ram"
        >
          Graphics
        </li>
        <div className="collapse font-weight-normal" id="Graphics">
          {Graphics.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Graphics${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Graphics${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Type"
          role="button"
          aria-expanded="false"
          aria-controls="Type"
        >
          Type
        </li>
        <div className="collapse font-weight-normal" id="Type">
          {Type.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Type${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Type${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#Offers"
          role="button"
          aria-expanded="false"
          aria-controls="Offers"
        >
          Offers
        </li>
        <div className="collapse font-weight-normal" id="Offers">
          {Offers.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`Offers${i}`}
                value={i}
              />
              <label className="form-check-label" htmlFor={`Offers${i}`}>
                {i}
              </label>
            </div>
          ))}
        </div>
        <li
          className="text-uppercase "
          data-toggle="collapse"
          href="#CustomerRatings"
          role="button"
          aria-expanded="false"
          aria-controls="Offers"
        >
          Customer Ratings
        </li>
        <div className="collapse font-weight-normal" id="CustomerRatings">
          {CustomerRatings.map((i) => (
            <div key={i} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`CustomerRatings${i}`}
                value={i}
              />
              <label
                className="form-check-label"
                htmlFor={`CustomerRatings${i}`}
              >
                {i}
              </label>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

Filters.propTypes = {};

export default Filters;
