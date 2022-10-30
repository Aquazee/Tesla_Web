import Regex from "../utils/Regex";
import { string } from 'yup';

const MobileValidate = string()
  .length(10, 'Mobile should be 10 digit')
  .matches(/[0-9]{9}/);

const EmailValidate = string().email('Invalid email');

const IdValidate = string().trim(true).length(24);

const PasswordValidate = string().trim(true)
  .min(8, 'Password should have atleast 8 characters')
  .matches(Regex.passwordReg, 'Password should contains a number, symbol, alphabets')

const GenderValidate = string().trim(true)

const GuidValidate = string().trim(true).length(36);

const NameValidate = string().trim(true).min(3, 'Name should have at least 3 characters').max(25, 'Name should have max 25 characters')

const SearchValidate = string().trim(true).min(3, 'Min 3 characters required').max(100, 'Max 25 characters allowed')

export default {
  EmailValidate,
  PasswordValidate,
  MobileValidate,
  NameValidate,
  GenderValidate,
  IdValidate,
  GuidValidate,
  SearchValidate
};
