import CommonValidate from "./common.schema";
import { object } from "yup";

const personalInformationSchema = object().shape({
  first_name: CommonValidate.NameValidate.required(""),
  last_name: CommonValidate.NameValidate.required(""),
  email: CommonValidate.EmailValidate.required(""),
  mobile: CommonValidate.MobileValidate.required(""),
  gender: CommonValidate.GenderValidate.required(""),
});

export default personalInformationSchema;
