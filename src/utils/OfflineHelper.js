import moment from "moment";
import { getURLParams } from "./Helper";

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
export default { searchApi };
