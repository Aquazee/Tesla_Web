import React, { useState } from "react";
import { Constants } from "utils";

import { BadgeIcon } from "../../../utils/Images";
import moment from "moment";
import { SPECIFICATIONS, WARRANTY } from "utils/Data";

const ProductName = ({ name }) => {
  return <div className="product_name">{name}</div>;
};

const ProductRating = ({ rating, ratingCounts, reviewCounts }) => {
  return (
    <div className="product-rating">
      <span className="badge badge-success">
        {rating} <i className="fa fa-star" />
      </span>
      <span className="rating-review">
        {ratingCounts} Ratings & {reviewCounts} Reviews
      </span>
    </div>
  );
};

const ProductCost = ({
  productPrice,
  productDiscount,
  amountSaved,
  amountCurrency = "₹",
}) => {
  return (
    <>
      <div>
        <span className="product_price">{`${amountCurrency} ${productPrice}`}</span>
        <strike className="product_discount">
          <span
            style={{ color: "black" }}
          >{`${amountCurrency} ${productDiscount}`}</span>
        </strike>
      </div>
      <div>
        <span className="amount_saved">You Saved:</span>
        <span
          style={{ color: "black" }}
        >{`${amountCurrency} ${amountSaved}`}</span>
      </div>
    </>
  );
};

const ProductDetailsList = () => {
  return (
    <div className="offersList mt-3">
      <h6>Available offers</h6>
      <ul className="offers">
        {Constants.OFFERLIST.map((offerItem, index) => (
          <OfferListItems key={`offer_${index}`} {...offerItem} />
        ))}
        <div className="collapse hide" id="collapseExample">
          <div className="">
            <li className="">
              <img alt="" src={BadgeIcon} />
              Light Laptop without Optical Disk Drive
            </li>
          </div>
        </div>
        <a
          className="btn btn-link px-0 text-primary"
          onClick={() => {}}
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View Details
        </a>
      </ul>
    </div>
  );
};

const OfferListItems = ({ name, hyperlink }) => {
  return (
    <li className="">
      <img alt="offer" src={BadgeIcon} />
      {name}
      {hyperlink && (
        <a href="#" className="ms-1 txt-primary">
          T & C
        </a>
      )}
    </li>
  );
};

const ProductHighLights = () => {
  return (
    <div className="col-6">
      <div className="row">
        <div className="col-5">
          <div className="dly_label">Highlights</div>
        </div>
        <div className="col-7 pdd-6">
          <div className="dly_parent">
            <ul>
              <li className="li-disc">
                Stylish & Portable Thin and Light Laptop{" "}
              </li>
              <li className="li-disc">
                13.3 inch Quad HD LED Backlit IPS Display
              </li>
              <li className="li-disc">
                Light Laptop without Optical Disk Drive
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentOptionsSection = () => {
  return (
    <div className="col-6">
      <div className="row">
        <div className="col-5">
          <div className="dly_label">Easy Payment Options</div>
        </div>
        <div className="col-7 pdd-6">
          <div className="dly_parent">
            <ul>
              <li className="li-disc">
                No cost EMI starting from ₹14,222/month{" "}
              </li>
              <li className="li-disc">Cash on Delivery</li>
              <li className="li-disc">Net banking & Credit/ Debit/ ATM card</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Specifications = () => {
  return (
    <ul className="list-group mt-3 mb-3">
      <li className="list-group-item px-0">
        <h4 className="px-3">Specifications</h4>
      </li>
      <li className="list-group-item">
        <p className="specs-header">General</p>
        <li className="">
          <table>
            {SPECIFICATIONS.map((specification) => {
              return (
                <tr>
                  <td className="col-3 dly_label">{specification.label}</td>
                  <td className="col-9 specs_val">{specification.value}</td>
                </tr>
              );
            })}
          </table>
        </li>
      </li>
      <li className="list-group-item">
        <p className="specs-header">Warranty</p>
        <li className="">
          <table>
            {WARRANTY.map((specification) => {
              return (
                <tr>
                  <td className="col-3 dly_label">{specification.label}</td>
                  <td className="col-9 specs_val">{specification.value}</td>
                </tr>
              );
            })}
          </table>
        </li>
      </li>
    </ul>
  );
};

const ProductFaq = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item ">
        <p
          style={{
            fontSize: 23,
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 500,
          }}
        >
          Questions and Answers
        </p>
      </li>
      <li className="list-group-item">
        Q:
        <span className=""> Can I run premium pro software on it ??</span>
        <br />
        A:
        <span className=""> Cannot</span>
        <br />
        <div className="row">
          <div className="col-8">
            <small className="light-grey">Ekart Customer</small>
            <br />
            <small className="light-grey">
              <i className="fa fa-check-circle" aria-hidden="true" /> Certified
              Buyer
            </small>
          </div>
          <div className="col-4 likesection">
            <span className="btn btn-link cusor-pointer light-grey text-decoration-none m-0 ps-0">
              <i className="fa fa-thumbs-up m-2 " aria-hidden="true" />
              <span id="likecount">24</span>
            </span>
            <span className="btn btn-link cusor-pointer light-grey text-decoration-none m-0 ps-0">
              <i className="fa fa-thumbs-down m-2 " aria-hidden="true" />
              <span id="unlikecount">1</span>
            </span>
            <span
              className="btn btn-link cusor-pointer light-grey text-decoration-none m-0"
              data-placement="bottom"
              data-toggle="popover"
              title="Report Abuse"
            >
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="pddv-15 d-flex justify-content-between align-items-center">
          <span>Didn't get the right answer you were looking for ?</span>
          <button
            data-toggle="modal"
            data-target="#productQuestModal"
            type="button"
            className="btn btn-light pull-right mt-15"
          >
            <small>Post Your Question</small>
          </button>
        </div>
      </li>
    </ul>
  );
};

const DeliverySection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onCheckPinCode = () => {
    const pinCodesList = ["75063", "400060"];
    const pinCode = document.getElementById("inputEmail3");
    const expectedDelivery = document.getElementById("delivery-expectation");
    if (pinCode.value.length > 0 && pinCodesList.indexOf(pinCode.value) > -1) {
      setIsChecked(true);
      let newDate = moment().add(4, "days").format("D MMM, dddd");
      expectedDelivery.innerText = "Delivery by " + newDate;
    } else {
    }
  };
  return (
    <div className="row">
      <div className="col-2">
        <div className="dly_label">Delivery</div>
      </div>
      <div className="col-10">
        <div className="">
          <div className="">
            <i
              className="fa fa-map-marker pull-left dly_label"
              style={{ paddingTop: 8, paddingVertical: 8 }}
              aria-hidden="true"
            />
            <input
              type="number"
              className="pull-left delivery-input"
              id="inputEmail3"
              placeholder="Enter Delivery Pincode"
            />
            <button
              type="button"
              className="btn btn-link dly_btn pull-left"
              onClick={onCheckPinCode}
            >
              {isChecked ? "Check" : "Change"}
            </button>
          </div>
        </div>
        <div className="pull-left">
          <div
            id="delivery-expectation"
            style={{ color: "#212121", fontSize: 12, fontWeight: 500 }}
          >
            Usually delivered in 7-8 days?
          </div>
          <div style={{ color: "#212121", fontSize: 10, fontWeight: 400 }}>
            Enter pincode for exact delivery dates/charges
          </div>
          <div style={{}}>
            <a
              className="btn btn-link px-0 text-primary"
              data-toggle="modal"
              data-target="#dlyModal"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComboOffers = () => {
  return (
    <>
      <div className="row row-underline">
        <div className="col-md-6">
          {" "}
          <span className=" deal-text">Combo Offers</span>{" "}
        </div>
        <div className="col-md-6">
          {" "}
          <a href="#" data-abc="true">
            {" "}
            <span className="ms-auto view-all" />{" "}
          </a>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="row padding-2">
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000
                      <span />
                    </span>
                  </strike>{" "}
                  <span className="ms-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: -4 }}>₹30,000</span>{" "}
                  <span className="ms-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
            <div className="col-md-2 text-center">
              {" "}
              <span className="step">+</span>{" "}
            </div>
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000
                      <span />
                    </span>
                  </strike>{" "}
                  <span className="ms-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: -4 }}>₹30,000</span>{" "}
                  <span className="ms-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12" style={{ marginLeft: 36 }}>
              <div className="boxo-pricing-items">
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Item</span>{" "}
                  <span className="combo_item_price">₹13,200</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">+</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Add-on</span>{" "}
                  <span className="combo_item_price">₹500</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">=</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">Total</span>{" "}
                  <span className="combo_item_price">₹13,700</span>{" "}
                </div>
                <div className="add-both-cart-button">
                  {" "}
                  <button type="button" className="btn btn-primary shop-button">
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center">
          {" "}
          <span className="vertical-line" />{" "}
        </div>
        <div className="col-md-5" style={{ marginLeft: -27 }}>
          <div className="row padding-2">
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000
                      <span />
                    </span>
                  </strike>{" "}
                  <span className="ms-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: -4 }}>₹30,000</span>{" "}
                  <span className="ms-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
            <div className="col-md-2 text-center">
              {" "}
              <span className="step">+</span>{" "}
            </div>
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000
                      <span />
                    </span>
                  </strike>{" "}
                  <span className="ms-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: -4 }}>₹30,000</span>{" "}
                  <span className="ms-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12" style={{ marginLeft: 36 }}>
              <div className="boxo-pricing-items">
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Item</span>{" "}
                  <span className="combo_item_price">₹13,200</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">+</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Add-on</span>{" "}
                  <span className="combo_item_price">₹500</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">=</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">Total</span>{" "}
                  <span className="combo_item_price">₹13,700</span>{" "}
                </div>
                <div className="add-both-cart-button">
                  {" "}
                  <button type="button" className="btn btn-primary shop-button">
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductDetailsComponents = {
  ProductName,
  ProductRating,
  ProductCost,
  ProductDetailsList,
  ProductHighLights,
  PaymentOptionsSection,
  Specifications,
  ProductFaq,
  DeliverySection,
  ComboOffers,
};

export default ProductDetailsComponents;
