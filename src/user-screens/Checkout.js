import React, { useEffect } from "react";
import ContactForm from "../domain/Checkout/ContactForm";

import { AppFunctions } from "../utils";
import BillingDetailsForm from "domain/Checkout/BillingDetailsForm";
import PaymentDetailsForm from "domain/Checkout/PaymentDetailsForm";
import RedeemForm from "domain/Checkout/RedeemForm";
import Button from "../components/Button";

function Checkout({ route }) {
  useEffect(() => {
    pageLoad();
  });

  const pageLoad = () => {
    htmlSet();
  };

  const htmlSet = () => {
    AppFunctions.setTitle(route.name);
    AppFunctions.headerHideMenu();
    AppFunctions.headerHideCartIcon();
    AppFunctions.headerHideMore();
    AppFunctions.headerHideSearchInput();
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            {/* <span className="badge badge-secondary badge-pill">3</span> */}
          </h4>
          <ul className="list-group mb-3">
            <CheckoutListItem name={"Asus Vivo Laptop"} amount={30} />
            <AppliedCode promo={"CX1234BX3145"} price={1000} currency={"₹"} />
            <TotalListItem />
          </ul>

          <RedeemForm />
        </div>

        <div className="accordion col-md-8 order-md-1" id="checkout">
          <ContactForm />
          <BillingDetailsForm />
          <PaymentDetailsForm />
          <Button className="btn-lg btn-block" type="submit">
            Continue to checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {};

export default Checkout;

const CheckoutListItem = ({ name, amount }) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed border-0">
      <div>
        <h6 className="my-0">{name}</h6>
        {/* <small className="text-muted">Brief description</small> */}
      </div>
      <span className="text-muted">{amount}</span>
    </li>
  );
};

const AppliedCode = ({ promo, currency, price }) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed border-0">
      <div className="text-success">
        <h6 className="my-0">Promo code</h6>
        <small>{promo}</small>
      </div>
      <span className="text-success">{`${currency} ${price}`}</span>
    </li>
  );
};

const TotalListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between border-0 border-top-1">
      <span>Total (USD)</span>
      <strong>$20</strong>
    </li>
  );
};
