import { InputBox } from 'components';
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
              Product Question
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* <InputBox /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeliveryInfoModal;
