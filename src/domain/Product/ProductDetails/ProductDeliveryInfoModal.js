import React from 'react';

const ProductDeliveryInfoModal = () => {
  return (
    <div
      className="modal fade"
      id="productQuestModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="productQuestModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productQuestModalTitle">
              Modal title
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Usually delivered in 7-8 days Enter pincode for exact delivery dates/charges
            Installation Details This product doesn't require installation Shipping Charges For
            Flipkart Assured Items Shipping charges are calculated based on the number of units,
            distance and delivery date. For Plus customers, shipping charges are free. For non-Plus
            customers, if the total value of FAssured items is more than Rs.500, shipping charges
            are free. If the total value of FAssured items is less than Rs.500, shipping charges =
            Rs.40 per unit * For faster delivery, shipping charges will be applicable.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeliveryInfoModal;
