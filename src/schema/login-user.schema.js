import CommonValidate from './common.schema';
import { object } from 'yup';

const LoginSchema = object().shape({
  email: CommonValidate.EmailValidate.required(''),
  password: CommonValidate.PasswordValidate.required(''),
});


export default LoginSchema;
