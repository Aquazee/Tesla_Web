import React from "react";
import "./Showcase.css";

const data = [
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/g/m/l/-original-imahayjpk2hvhayw.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/s/s/-original-imahayjpmzazpcwj.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/l/v/-original-imahayjpefquymhb.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/y/y/-original-imahayjpzcjbzgbt.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/0/f/t/-original-imahayjpztygbyus.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/m/8/-original-imahayjpqgzuvqgw.jpeg",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/0/o/5/-original-imahayjpze9rzdtr.jpeg",
];

function ImgItem({ i }) {
  return (
    <li onMouseOver={() => replaceImage(i)} data-image={i}>
      <img src={i} alt="" />
    </li>
  );
}

var replaceImage = (i) => {
  const element = document.getElementById("thumb");
  const element1 = document.getElementById("img-zoom-anch");

  element.src = i;
  element1.src = i;
};

function Showcase() {
  return (
    <div className="row">
      <div className="col-2 col-lg-2 order-lg-2 order-1">
        <ul className="image_list">
          {data.map((i, index) => (
            <ImgItem key={index} i={i} />
          ))}
        </ul>
      </div>
      <div
        className="col-10 col-lg-10 order-lg-10 order-2"
        style={{ position: "relative" }}
      >
        <div className="image_selected">
          <a
            id="img-zoom-anch"
            className="magnifier-thumb-wrapper"
            href={data[0]}
          >
            <img
              loading="eager"
              id="thumb"
              src={data[0]}
              fetchpriority="high"
              alt="Apple MacBook Air Apple M4 - (24 GB/512 GB SSD/macOS Sequoia) MC654HN/A"
            />
          </a>
          <div
            className="magnifier-preview"
            id="preview"
            style={{ width: "200px", height: "133px" }}
          ></div>
        </div>
        <div id="myresult" className="img-zoom-result d-none" />
        <div style={{ marginTop: 8 }}>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="golden-color btn btn-primary shop-button"
              style={{ width: "49.5%" }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" /> Add to
              Cart
            </button>
            <button
              type="button"
              className="green-color btn btn-success shop-button "
              style={{ width: "49.5%" }}
            >
              <i className="fa fa-bolt" aria-hidden="true" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
