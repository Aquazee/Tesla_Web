import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Showcase from "../../components/Product/Showcase/Showcase";
import './style.css'
  
const Products = () => (
    <div className="super_container">
        <header className="header" style={{ display: 'none' }}>
            <div className="header_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                            <div className="header_search">
                                <div className="header_search_content">
                                    <div className="header_search_form_container">
                                        <form action="#" className="header_search_form clearfix">
                                            <div className="custom_dropdown">
                                                <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down"></i>
                                                    <ul className="custom_list clc">
                                                        <li><a className="clc" href="#">All Categories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="single_product">
            <div className="container-fluid" style={{ backgroundColor: "#fff", padding: 11 }}>
                <div className="row">
                    <div className="col-5 order-lg-5 order-1">
                        <Showcase />
                    </div>
                    <div className="col-7 order-lg-7 order-2">
                        <div className="product_description">
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a className="text-grey" href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-grey" href="/search">Computers</a></li>
                                    <li className="breadcrumb-item"><a className="text-grey" href="/search">Laptops</a></li>
                                    <li className="breadcrumb-item"><a className="text-grey" href="/search">Acer Laptops</a></li>
                                    <li className="breadcrumb-item text-grey">Acer Aspire 3</li>
                                </ol>
                            </nav>
                            <div className="product_name">Acer Aspire 3 Celeron Dual Core - (2 GB/500 GB HDD/Windows 10 Home) A315-33 Laptop (15.6 inch, Black, 2.1 kg)</div>
                            <div className="product-rating"><span className="badge badge-success"> 4.5 <i className="fa fa-star"></i></span> <span className="rating-review"> 35 Ratings & 45 Reviews</span></div>
                            <div>
                                <span className="product_price">₹ 29,000</span>
                                <strike className="product_discount"> <span style={{ color: 'black' }}>₹ 2,000</span> </strike>
                            </div>
                            <div>
                                <span className="product_saved">You Saved:</span>
                                <span style={{ color: "black" }}>₹ 2,000</span>
                            </div>
                            <div className="offersList">
                                <h5>Available offers</h5>
                                <ul className="offers">
                                    <li className=""><img src="assets/images/badge.png" /> Stylish & Portable Thin and Light Laptop <a href="#" className="txt-primary">T & C</a></li>
                                    <li className=""><img src="assets/images/badge.png" />13.3 inch Quad HD LED Backlit IPS Display</li>
                                    <li className=""><img src="assets/images/badge.png" />Light Laptop without Optical Disk Drive</li>
                                    <div className="collapse hide" id="collapseExample">
                                        <div className="">
                                            <li className=""><img src="assets/images/badge.png" />Light Laptop without Optical Disk Drive</li>
                                        </div>
                                    </div>
                                    <a className="btn btn-link px-0 text-primary" onClick={() => { }} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        View Details
                                    </a>
                                </ul>
                            </div>
                            <hr className="singleline" />
                            <div>
                                <div className="row">
                                    <div className="col-2">
                                        <div className="dly_label">
                                            Delivery
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <div className="dly_parent" >
                                            <div className="groupinput" >
                                                <i className="fa fa-map-marker pull-left dly_label" style={{ paddingTop: 8, paddingVertical: 8 }} aria-hidden="true"></i>
                                                <input type="email" className="dly_input pull-left" id="inputEmail3" placeholder="Enter Delivery Pincode" />
                                                <button type="button" className="btn btn-link dly_btn pull-left">
                                                    Check
                                            </button>
                                            </div>
                                        </div>
                                        <div className="pull-left">
                                            <div style={{ color: "#212121", fontSize: 12, fontWeight: 500 }}>Usually delivered in 7-8 days?</div>
                                            <div style={{ color: "#212121", fontSize: 10, fontWeight: 400 }}>Enter pincode for exact delivery dates/charges</div>
                                            <div style={{}}>
                                                <a className="btn btn-link px-0 text-primary" data-toggle="modal" data-target="#exampleModalLong">
                                                    View Details
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="dly_label">
                                                    Highlights
                                                </div>
                                            </div>
                                            <div className="col-7 pdd-6">
                                                <div className="dly_parent" >
                                                    <ul>
                                                        <li className="li-disc">Stylish & Portable Thin and Light Laptop </li>
                                                        <li className="li-disc">13.3 inch Quad HD LED Backlit IPS Display</li>
                                                        <li className="li-disc">Light Laptop without Optical Disk Drive</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="dly_label">
                                                    Easy Payment Options
                                                </div>
                                            </div>
                                            <div className="col-7 pdd-6">
                                                <div className="dly_parent" >
                                                    <ul>
                                                        <li className="li-disc">No cost EMI starting from ₹14,222/month </li>
                                                        <li className="li-disc">Cash on Delivery</li>
                                                        <li className="li-disc">Net banking & Credit/ Debit/ ATM card</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                            {/* <hr className="singleline" /> */}
                            <ul className="list-group">
                                <li className="list-group-item "><p style={{ fontSize: 23, marginTop: 10, marginBottom: 10, fontWeight: 500 }}>Specifications</p></li>
                                <li className="list-group-item">
                                    <h5>General </h5>
                                </li>
                                <li className="list-group-item">Morbi leo risus</li>
                            </ul>
                            <ul className="list-group">
                                <li className="list-group-item "><p style={{ fontSize: 23, marginTop: 10, marginBottom: 10, fontWeight: 500 }}>Questions and Answers</p></li>
                                <li className="list-group-item">
                                    Q:<span className=""> Can I run premium pro software on it ??</span><br />
                                A:<span className=""> Cannot</span><br />
                                    <div className="row">
                                        <div className="col-9">
                                            <small style={{ color: "#9c9a9a" }}>Tesla Customer</small><br />
                                            <small style={{ color: "#9c9a9a" }}><i className="fa fa-check-circle" aria-hidden="true"></i> Certified Buyer</small>
                                        </div>
                                        <div className="col-3 likesection">
                                            <span className="cusor-pointer" ><i className="fa fa-thumbs-up m-2 " aria-hidden="true"></i><span id="likecount">24</span></span>
                                            <span className="cusor-pointer" ><i className="fa fa-thumbs-down m-2 " aria-hidden="true"></i><span id="unlikecount">1</span></span>
                                            <span className="btn btn-link cusor-pointer" data-placement="bottom"  data-toggle="popover" title="Report Abuse" ><i className="fa fa-angle-down like_sectangle " aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="pddv-15"> Didn't get the right answer you were looking for ? <button data-toggle="modal" data-target="#productQuestModal" type="button" className="btn btn-light pull-right mt-15">Post Your Question</button></div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row row-underline">
                    <div className="col-md-6"> <span className=" deal-text">Combo Offers</span> </div>
                    <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all"></span> </a> </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="row padding-2">
                            <div className="col-md-5 padding-0">
                                <div className="bbb_combo">
                                    <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                                    <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                                    <div className="d-flex flex-row justify-content-start" style={{ marginBottom: 13 }}> <span style={{ marginTop: -4 }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                                </div>
                            </div>
                            <div className="col-md-2 text-center"> <span className="step">+</span> </div>
                            <div className="col-md-5 padding-0">
                                <div className="bbb_combo">
                                    <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                                    <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                                    <div className="d-flex flex-row justify-content-start" style={{ marginBottom: 13 }}> <span style={{ marginTop: -4 }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12" style={{ marginLeft: 36 }}>
                                <div className="boxo-pricing-items">
                                    <div className="combo-pricing-item"> <span className="items_text">1 Item</span> <span className="combo_item_price">₹13,200</span> </div>
                                    <div className="combo-plus"> <span className="plus-sign">+</span> </div>
                                    <div className="combo-pricing-item"> <span className="items_text">1 Add-on</span> <span className="combo_item_price">₹500</span> </div>
                                    <div className="combo-plus"> <span className="plus-sign">=</span> </div>
                                    <div className="combo-pricing-item"> <span className="items_text">Total</span> <span className="combo_item_price">₹13,700</span> </div>
                                    <div className="add-both-cart-button"> <button type="button" className="btn btn-primary shop-button">Add to Cart</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-center"> <span className="vertical-line"></span> </div>
                    <div className="col-md-5" style={{ marginLeft: -27 }}>
                        <div className="row padding-2">
                            <div className="col-md-5 padding-0">
                                <div className="bbb_combo">
                                    <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                                    <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                                    <div className="d-flex flex-row justify-content-start" style={{ marginBottom: 13 }}> <span style={{ marginTop: -4 }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                                </div>
                            </div>
                            <div className="col-md-2 text-center"> <span className="step">+</span> </div>
                            <div className="col-md-5 padding-0">
                                <div className="bbb_combo">
                                    <div className="bbb_combo_image"><img className="bbb_combo_image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                                    <div className="d-flex flex-row justify-content-start"> <strike style={{ color: "red" }}> <span className="fs-10" style={{ color: "black" }}>₹ 32,000<span> </span></span></strike> <span className="ml-auto"><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i><i className="fa fa-star p-rating"></i></span> </div>
                                    <div className="d-flex flex-row justify-content-start" style={{ marginBottom: 13 }}> <span style={{ marginTop: -4 }}>₹30,000</span> <span className="ml-auto fs-10">23 Reviews</span> </div> <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12" style={{ marginLeft: 36 }}>
                                <div className="boxo-pricing-items">
                                    <div className="combo-pricing-item"> <span className="items_text">1 Item</span> <span className="combo_item_price">₹13,200</span> </div>
                                    <div className="combo-plus"> <span className="plus-sign">+</span> </div>
                                    <div className="combo-pricing-item"> <span className="items_text">1 Add-on</span> <span className="combo_item_price">₹500</span> </div>
                                    <div className="combo-plus"> <span className="plus-sign">=</span> </div>
                                    <div className="combo-pricing-item"> <span className="items_text">Total</span> <span className="combo_item_price">₹13,700</span> </div>
                                    <div className="add-both-cart-button"> <button type="button" className="btn btn-primary shop-button">Add to Cart</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-underline">
                    <div className="col-md-6"> <span className=" deal-text">Specifications</span> </div>
                    <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all"></span> </a> </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="col-md-12">
                            <tbody>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Sales Package :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Model Number :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li> 14-dh0107TU </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Part Number :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li>7AL87PA</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Color :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li>Black</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Suitable for :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li>Processing & Multitasking</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="row mt-10">
                                    <td className="col-md-4"><span className="p_specification">Processor Brand :</span> </td>
                                    <td className="col-md-8">
                                        <ul>
                                            <li>Intel</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            <div className="modal fade" id="dlyModal" tabIndex="-1" role="dialog" aria-labelledby="deliveryModalLabel" aria-hidden="true" style={{ top: "30%" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deliveryModalLabel">Delivery & Installation details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Usually delivered in
                            7-8 days
                            Enter pincode for exact delivery dates/charges
                            Installation Details
                            This product doesn't require installation
                            Shipping Charges For Flipkart Assured Items
                            Shipping charges are calculated based on the number of units, distance and delivery date.
                            For Plus customers, shipping charges are free.
                            For non-Plus customers, if the total value of FAssured items is more than Rs.500, shipping charges are free. If the total value of FAssured items is less than Rs.500, shipping charges = Rs.40 per unit
                            * For faster delivery, shipping charges will be applicable.

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="productQuestModal" tabIndex="-1" role="dialog" aria-labelledby="productQuestModalTitle" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="productQuestModalTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Usually delivered in
                            7-8 days
                            Enter pincode for exact delivery dates/charges
                            Installation Details
                            This product doesn't require installation
                            Shipping Charges For Flipkart Assured Items
                            Shipping charges are calculated based on the number of units, distance and delivery date.
                            For Plus customers, shipping charges are free.
                            For non-Plus customers, if the total value of FAssured items is more than Rs.500, shipping charges are free. If the total value of FAssured items is less than Rs.500, shipping charges = Rs.40 per unit
                            * For faster delivery, shipping charges will be applicable.

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Test body
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)
Products.propTypes = {

};

export default Products;