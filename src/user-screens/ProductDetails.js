import React, { useEffect } from 'react';

import BreadCrumb from '../domain/BreadCrumb/BreadCrumb';
import Showcase from '../domain/Product/Showcase/Showcase';
import '../domain/Product/ProductDetails/style.css';
import ProductDetailsComponents from '../domain/Product/ProductDetails/ProductDetailsComponents';
import DeliveryModal from '../domain/Product/ProductDetails/DeliveryModal';
import ProductDeliveryInfoModal from '../domain/Product/ProductDetails/ProductDeliveryInfoModal';
import { AppFunctions } from '../utils';

const {
  ComboOffers,
  DeliverySection,
  PaymentOptionsSection,
  ProductCost,
  ProductDetailsList,
  ProductFaq,
  ProductHighLights,
  ProductName,
  ProductRating,
  Specifications
} = ProductDetailsComponents;

function ProductDetails({route}) {
  useEffect(() =>{
    pageLoad();
  })

  const pageLoad = () => {
    AppFunctions.setTitle(route.name)
  }
  return (
    <div className="super_container offset-1 col-10">
      {/* <header className="header" style={{ display: 'none' }}>
      <div className="header_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
              <div className="header_search">
                <div className="header_search_content">
                  <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                      <div className="custom_dropdown">
                        <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                          <ul className="custom_list clc">
                            <li>
                              <a className="clc" href="#">All Categories</a>
                            </li>
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
    </header> */}

      <div className="single_product">
        <div className="container" style={{ backgroundColor: '#fff', padding: 11 }}>
          <div className="row">
            <div className="col-5 order-lg-5 order-1">
              <Showcase />
            </div>
            <div className="col-7 order-lg-7 order-2">
              <div className="product_description">
                <BreadCrumb />
                <ProductName name="Apple MacBook Air Apple M4 - (24 GB/512 GB SSD/macOS Sequoia) MC654HN/A  (13.6 inch, Silver, 1.24 kg)" />
                <ProductRating rating={4} reviewCounts={45} ratingCounts={100} />
                <ProductCost amountSaved={4000} productDiscount={1500} productPrice={135990} />
                <ProductDetailsList />
                <hr className="singleline" />
                <div>
                  <DeliverySection />
                  <div className="row">
                    <ProductHighLights />
                    <PaymentOptionsSection />
                  </div>
                </div>
                <div /> 
                <hr className="singleline" />
                <Specifications />
                <ProductFaq />
              </div>
            </div>
          </div>
          <ComboOffers />
        </div>
      </div>
      <DeliveryModal />
      <ProductDeliveryInfoModal />
    </div>
  );
}

ProductDetails.propTypes = {};

export default ProductDetails;
