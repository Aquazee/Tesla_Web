import moment from "moment";
import { getURLParams } from "./Helper";
import AppFunctions from "./AppFunctions";
import Constants from "./Constants";

const searchApi = (params, PRODUCT_LIST) => {
  const sortField = params.get("sort_field");
  const sortType = params.get("sort_type");
  switch (sortField + sortType) {
    case 'priceasc':
        return  PRODUCT_LIST.sort((a, b) => a.cost.selling_price - b.cost.selling_price)
    case 'pricedesc':
        return  PRODUCT_LIST.sort((a, b) =>b.cost.selling_price - a.cost.selling_price)
    case 'ratingsdesc':
        return  PRODUCT_LIST.sort((a, b) =>b.review_and_ratings.rating - a.review_and_ratings.rating)
    case 'created_date':
        return  PRODUCT_LIST.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    default:
        break;
  }
};

const registerApi = (body) => {
  console.log(body)
  delete body['password']
  AppFunctions.setStoreData(Constants.STORAGEKEYS.USER, body)
  window.location.href = "/"
};
export default { searchApi, registerApi };
