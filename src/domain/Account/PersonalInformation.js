import { InputBox } from "components";
import Button from "components/Button";
import InputRadioGroup from "components/InputRadioGroup";
import constants from "../../utils/Constants";
import React from "react";
import { useForm } from "react-hook-form";
import LoginSchema from "schema/login-user.schema";
import UseYupValidationResolver from "utils/UseYupValidationResolver";

const PersonalInformation = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm({ resolver: UseYupValidationResolver(LoginSchema) });

  const submitLogin = async (data) => {
    if (data) {
      // const resp = await login(data)
      window.location.href = "http://localhost:3000";
      // Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
      reset();
    }
  };

  const onEditClick = () => {};

  return (
    <div
      className="tab-pane fade show active p-4"
      id="profile_information"
      role="tabpanel"
      aria-labelledby="profile_information-tab"
    >
      <div className="section-header d-flex">
        <h6 className="mb-4 mr-3 cursor-pointer">Personal Information</h6>
        <a className="">Edit</a>
      </div>
      <div className="row justify-content-between">
        <InputBox
          className="mb-3 col-6"
          label="First Name"
          name="first_name"
          type="text"
          register={register}
          validFeedbackValue={
            errors.first_name && errors.first_name.type === "required"
              ? errors.first_name.message
              : ""
          }
          required
        />
        <InputBox
          className="mb-3 col-6"
          label="Last Name"
          name="last_name"
          type="text"
          register={register}
          validFeedbackValue={
            errors.last_name && errors.last_name.type === "required"
              ? errors.last_name.message
              : ""
          }
          required
        />
      </div>
      <div className="row">
        <InputRadioGroup label={"Gender"} options={constants.GENDER} />
      </div>
      <div className="row">
        <InputBox
          className="mb-3 col-6"
          label="Email Address"
          name="email_address"
          type="text"
          register={register}
          validFeedbackValue={
            errors.email_address && errors.email_address.type === "required"
              ? errors.email_address.message
              : ""
          }
          required
        />
      </div>
      <div className="row">
        <InputBox
          className="mb-3 col-6"
          label="Mobile Number"
          name="mobile_number"
          type="text"
          register={register}
          validFeedbackValue={
            errors.mobile_number && errors.mobile_number.type === "required"
              ? errors.mobile_number.message
              : ""
          }
          required
        />
      </div>
      <Button className="btn-primary mt-2" value="Save" />
    </div>
  );
};

export default PersonalInformation;
