import React, { useEffect } from "react";
import "./searchitem.css";

const SearchItem = () => {
    return (<a href="/product" className="row btn-link text-left">
        <div className="col-3 position-relative">
            <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt="" width="100%" />
            <span href="#" className="btn-link prt_heart"><i className="fa fa-heart" aria-hidden="true" style={{ color: "#c2c2c2" }}></i></span>
            <div className="form-check prt_compare">
                <input type="checkbox" className="form-check-input" id="addCompare" />
                <label className="form-check-label text-black" htmlFor="addCompare">Add to Compare</label>
            </div>
        </div>
        <div className="col-6">
            <div className="pull-left prt_label">
                <span className="">HP 15s Core i3 10th Gen - (8 GB/1 TB HDD/Windows 10 Home) 15s-du2071TU Thin and Light Laptop</span>
                <div className="text-left"><span className="badge badge-success"> 4.5 <i className="fa fa-star"></i></span> <span className="rating-review"> 35 Ratings & 45 Reviews</span></div>
            </div>
            <div className="pull-left">
                <ul style={{ marginLeft: 14, marginTop: 11 }}>
                    <li className="li-disc">Stylish & Portable Thin and Light Laptop </li>
                    <li className="li-disc">13.3 inch Quad HD LED Backlit IPS Display</li>
                    <li className="li-disc">Light Laptop without Optical Disk Drive</li>
                </ul>
            </div>
        </div>
        <div className="col-3">
            <span className="product_price" style={{ fontSize: 25, color: "#333", margin: 0 }}>₹29,000</span><br />
            <span className="text-left">
                <strike className="product_discount m-0">
                    <span style={{ color: '#878787', fontSize: 15 }}>₹ 2,000</span>
                </strike>
                <span style={{ color: '#388e3c', fontSize: 14, marginLeft: 10 }}>12% off</span>
            </span><br />
            <span style={{ fontSize: 14, color: "#333" }}>No Cost EMI</span>
        </div>
    </a>)
};

SearchItem.propTypes = {
};

export default SearchItem;
