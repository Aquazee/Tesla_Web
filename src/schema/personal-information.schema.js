import CommonValidate from "./common.schema";
import { object } from "yup";

const personalInformationSchema = object().shape({
  first_name: CommonValidate.NameValidate.required("First name is required"),
  last_name: CommonValidate.NameValidate.required("Last name is required"),
  email: CommonValidate.EmailValidate.required("Email is required"),
  mobile: CommonValidate.MobileValidate.required("Mobile number is required"),
  gender: CommonValidate.GenderValidate.required("Gender is required"),
});

export default personalInformationSchema;
