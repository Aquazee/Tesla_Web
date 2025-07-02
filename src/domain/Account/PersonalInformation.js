import { InputBox, InputRadioGroup } from "../../components";
import Button from "components/Button";
import constants from "../../utils/Constants";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import personalInformationSchema from "../../schema/personal-information.schema";
import UseYupValidationResolver from "utils/UseYupValidationResolver";

const PersonalInformation = () => {
  const {
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    register,
  } = useForm({ resolver: UseYupValidationResolver(personalInformationSchema) });

  const onSubmit1 = async (data) => {
    if (data) {
      // const resp = await login(data)
      window.location.href = "http://localhost:3000";
      // Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
      reset();
    }
  };

  const onSubmit = (data) => {
    console.log('Personal info: ', data);
  }

  const onEditClick = () => {};

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="tab-pane fade show active p-4"
        id="profile_information"
        role="tabpanel"
        aria-labelledby="profile_information-tab"
      >
        <div className="section-header d-flex">
          <h6 className="mb-4 me-3 cursor-pointer">Personal Information</h6>
          <a className="">Edit</a>
        </div>
        <div className="row justify-content-between">
          <InputBox
            id="first_name"
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
            id="last_name"
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
          <InputRadioGroup
            id="gender"
            label={"Gender"}
            name="gender"
            options={constants.GENDER}
            register={register}
          />
        </div>
        <div className="row">
          <InputBox
            id="email"
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
            id="mobile"
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
        {/* <Button className="btn-primary mt-2" value="Save" type="submit"/> */}
        <Button type="submit" className="btn-outline-warning">Save</Button>
      </div>
    </form>
  );
};

export default PersonalInformation;
