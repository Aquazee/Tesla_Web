import React, { useEffect } from 'react';

import { AppFunctions } from '../utils';

function Checkout({ route }) {

  useEffect(() => {
    pageLoad();
  })

  const pageLoad = () => {
    htmlSet();
  }

  const htmlSet = () => {
    AppFunctions.setTitle(route.name);
    AppFunctions.headerHideMenu();
    AppFunctions.headerHideCartIcon();
    AppFunctions.headerHideMore();
    AppFunctions.headerHideSearchInput();
  }
  return (
    <div className="container">

      <div className="row my-5">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            {/* <span className="badge badge-secondary badge-pill">3</span> */}
          </h4>
          <ul className="list-group mb-3">
            <CheckoutListItem name={'Asus Vivo Laptop'} amount={30} />
            <AppliedCode promo={'CX1234BX3145'} price={1000} currency={'₹'} />
            <TotalListItem />
          </ul>

          <form className="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-8 order-md-1">

          <form className="needs-validation was-validated" noValidate="">
            <div className='mb-1'>
              <div className="card card-body p-1">
                <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#contactForm" aria-expanded="false" aria-controls="contactForm">
                  Contact Details
                </button>
              </div>
              <div className="collapse card card-body mb-2" id="contactForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                    <div className="invalid-feedback" style={{ width: '100%' }}>
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-1'>
              <div className="card card-body p-1">
                <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#billingDetailsForm" aria-expanded="false" aria-controls="billingDetailsForm">
                  Billing Details
                </button>
              </div>
              <div className="collapse card card-body" id="billingDetailsForm">
                <div className="mb-3">
                  <label htmlFor="address">Address Line 1</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">Address Line 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" required="" onChange={() => console.log('selected country')}>
                      <option value="Choose">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required="" onChange={() => console.log('selected country')}>
                      <option value="Choose">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
              </div>
            </div>
            {/* <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info" />
              <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div> */}

            <div className='mb-3'>
              <div className="card card-body p-1 ">
                <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#paymentForm" aria-expanded="false" aria-controls="paymentForm">
                  Payment
                </button>
              </div>
              <div className="collapse card card-body" id="paymentForm">
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                    <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

Checkout.propTypes = {};

export default Checkout;

const CheckoutListItem = ({ name, amount }) => {
  return (<li className="list-group-item d-flex justify-content-between lh-condensed border-0">
    <div>
      <h6 className="my-0">{name}</h6>
      {/* <small className="text-muted">Brief description</small> */}
    </div>
    <span className="text-muted">{amount}</span>
  </li>)
}

const AppliedCode = ({ promo, currency, price }) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed border-0">
      <div className="text-success">
        <h6 className="my-0">Promo code</h6>
        <small>{promo}</small>
      </div>
      <span className="text-success">{`${currency} ${price}`}</span>
    </li>
  )
}

const TotalListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between border-0 border-top-1">
      <span>Total (USD)</span>
      <strong>$20</strong>
    </li>
  )
}