import { InputBox } from "components";
import InputRadioGroup from "components/InputRadioGroup";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import LoginSchema from "schema/login-user.schema";
import UseYupValidationResolver from "utils/UseYupValidationResolver";

const ManageAddresses = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm({ resolver: UseYupValidationResolver(LoginSchema) });
  return (
    <div
      className="tab-pane fade p-4"
      id="manage_addresses"
      role="tabpanel"
      aria-labelledby="manage_addresses-tab"
    >
      <h5 className="mb-4">Manage Addresses</h5>
      <button
        type="button"
        id="add_address"
        className="btn  btn-light w-100 text-left p-3"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        + Add A New Address
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <div>
        <div className="row">
          <InputBox
            className="mb-3 col-4"
            label="Name"
            name="name"
            type="text"
            register={register}
            validFeedbackValue={
              errors.name && errors.name.type === "required"
                ? errors.name.message
                : ""
            }
            required
          />

          <InputBox
            className="mb-3 col-4"
            label="Mobile Number"
            name="mobile"
            type="text"
            register={register}
            validFeedbackValue={
              errors.mobile && errors.mobile.type === "required"
                ? errors.mobile.message
                : ""
            }
            required
          />
        </div>
        <div className="row">
          <InputBox
            className="mb-3 col-4"
            label="Pincode"
            name="pincode"
            type="text"
            register={register}
            validFeedbackValue={
              errors.pincode && errors.pincode.type === "required"
                ? errors.pincode.message
                : ""
            }
            required
          />
          <InputBox
            className="mb-3 col-4"
            label="Locality"
            name="locality"
            type="text"
            register={register}
            validFeedbackValue={
              errors.locality && errors.locality.type === "required"
                ? errors.locality.message
                : ""
            }
            required
          />
        </div>
        <div className="row">
          <InputBox
            className="mb-3 col-4"
            label="City"
            name="city"
            type="text"
            register={register}
            validFeedbackValue={
              errors.city && errors.city.type === "required"
                ? errors.city.message
                : ""
            }
            required
          />
          <InputBox
            className="mb-3 col-4"
            label="State"
            name="state"
            type="text"
            register={register}
            validFeedbackValue={
              errors.state && errors.state.type === "required"
                ? errors.state.message
                : ""
            }
            required
          />
        </div>
        <div className="row">
          <InputBox
            className="mb-3 col-4"
            label="Landmark"
            name="landmark"
            type="text"
            register={register}
            validFeedbackValue={
              errors.landmark && errors.landmark.type === "required"
                ? errors.landmark.message
                : ""
            }
          />
          <InputBox
            className="mb-3 col-4"
            label="Alternate Phone"
            name="alt_phone"
            type="text"
            register={register}
            validFeedbackValue={
              errors.alt_phone && errors.alt_phone.type === "required"
                ? errors.alt_phone.message
                : ""
            }
          />
        </div>
        <div className="row">
          <InputRadioGroup
            className="mt-3"
            label={"Address Type"}
            options={[
              { label: "Home", selected: false },
              { label: "Work", selected: false },
            ]}
          />
        </div>
        <Button className="btn-primary mt-2" value="Save"/>
      </div>
    </div>
  );
};

export default ManageAddresses;
