import CommonValidate from './common.schema';
import {object} from 'yup';

const HeaderSearchSchema = object().shape({
  search: CommonValidate.SearchValidate,
});


export default HeaderSearchSchema;
