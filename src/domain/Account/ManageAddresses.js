import React from "react";

const ManageAddresses = () => {
  return (
    <div
      className="tab-pane fade p-4"
      id="manage_addresses"
      role="tabpanel"
      aria-labelledby="manage_addresses-tab"
    >
      <h5 className="mb-4">Manage Addresses</h5>
      <button type="button" id="add_address" className="btn  btn-light w-100 text-left p-3"
        data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
      >+ Add A New Address</button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
    </div>
  )
}

export default ManageAddresses;