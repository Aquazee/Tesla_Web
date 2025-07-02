import React, { useEffect, useState } from "react";
import { AppFunctions, Urls } from "utils";
import "./searchitem.css";

const SearchItem = ({ path = "/product/mac", ...props }) => {
  const onAction = (e) => {
    if (e.target.classList.contains("fa-heart")) {
      e.preventDefault();
    } else if (
      e.target.classList.contains("add-to-compare-label") ||
      e.target.classList.contains("add-to-compare")
    ) {
      e.preventDefault();
    } else {
      console.log("search-item clicked");
      window.location.href = `${path}`;
    }
  };

  return (
    <a
      href="/product"
      target="_blank"
      url={path}
      className="row btn-link text-left text-decoration-none search-item p-2"
      onClick={onAction}
    >
      <div className="col-2 position-relative search-item-img-cont py-4">
        <img src={props.image_link !== '' ? props.image_link : Urls.URLS.NO_IMAGE_FOUND} alt={props.custom_label} width="100%" />
        <AddToWishlist />
        <AddToCompare />
      </div>
      <div className="col-6">
        <div className="pull-left prt_label">
          <span className="">{props.custom_label}</span>
          {props.review_and_ratings && (
            <div className="text-left">
              <span className="badge badge-success">
                {props.review_and_ratings.rating}
                <i className="ms-1 fa fa-star" />
              </span>
              <span className="rating-review">
                {props.review_and_ratings.rated_customer_count} Ratings &{" "}
                {props.review_and_ratings.review_count} Reviews
              </span>
            </div>
          )}
        </div>
        <div className="pull-left">
          <ul>
            <li className="li-disc">
              Stylish & Portable Thin and Light Laptop{" "}
            </li>
            <li className="li-disc">
              13.3 inch Quad HD LED Backlit IPS Display
            </li>
            <li className="li-disc">Light Laptop without Optical Disk Drive</li>
          </ul>
        </div>
      </div>
      <SearchItemPriceSection {...props.cost} />
    </a>
  );
};

SearchItem.propTypes = {};

export default SearchItem;

const AddToCompare = () => {
  const onAddToCompareClick = (e) => {
    console.log("add-to-compare Clicked");
  };

  return (
    <div
      className="form-check prt_compare ms-3"
      role="button"
      onClick={onAddToCompareClick}
    >
      <input
        type="checkbox"
        className="form-check-input add-to-compare"
        id="addCompare"
      />
      <label
        className="form-check-label text-dark add-to-compare-label font-weight-lighter"
        htmlFor="addCompare"
      >
        Add to Compare
      </label>
    </div>
  );
};

const AddToWishlist = ({ isWished = false }) => {
  const [isWishlisted, setWishlisted] = useState(isWished);

  const onWishlistClick = (e) => {
    setWishlisted(!isWishlisted);
    console.log("Wishlist Clicked");
  };

  return (
    <span
      href="#"
      className="btn-link prt_heart wishlist-product"
      onClick={onWishlistClick}
    >
      <i
        className={`fa fa-heart ${isWishlisted ? "text-danger" : "text-grey"}`}
        aria-hidden="true"
      />
    </span>
  );
};

const SearchItemPriceSection = ({
  currency,
  mrp,
  gross_amount,
  selling_price,
  discount,
}) => {
  return (
    <div className="col-3">
      <span
        className="product_price"
        style={{ fontSize: 25, color: "#333", margin: 0 }}
      >
        {`${currency} ${selling_price}`}
      </span>
      <br />
      <span className="text-left">
        <strike className="product_discount m-0">
          <span
            style={{ color: "#878787", fontSize: 15 }}
          >{`${currency} ${mrp}`}</span>
        </strike>
        <span style={{ color: "#388e3c", fontSize: 14, marginLeft: 10 }}>
          {AppFunctions.calculatePercentage(mrp, selling_price)}% off
        </span>
      </span>
      <br />
      <span style={{ fontSize: 14, color: "#333" }}>No Cost EMI</span>
    </div>
  );
};
