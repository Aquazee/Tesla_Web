import CommonValidate from './common.schema';
import { object } from 'yup';

const RegisterSchema = object().shape({
  first_name: CommonValidate.NameValidate.required(''),
  last_name: CommonValidate.NameValidate.required(''),
  email: CommonValidate.EmailValidate.required(''),
  password: CommonValidate.PasswordValidate.required(''),
  cpassword: CommonValidate.PasswordValidate.required(''),
});


export default RegisterSchema;
