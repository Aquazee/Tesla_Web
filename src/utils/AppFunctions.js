import _ from 'lodash';
import Message from '../utils/Message';
import Constants from './Constants';

const AppFunctions = {};

AppFunctions.getStoredUserDetails = () => AppFunctions.getStoreData(Constants.STORAGEKEYS.USER);

AppFunctions.setTitle = (title) => { document.title = `${title} | Tesla`; };

AppFunctions.headerHideMenu = () => {
  document.querySelector('.allmenubar').classList.add('d-none')
};

AppFunctions.headerHideCartIcon = () => {
  document.querySelector('.cart-icon').classList.add('d-none')
};

AppFunctions.headerHideMore = () => {
  document.querySelector('.header-more').classList.add('d-none')
};

AppFunctions.headerHideSearchInput = () => {
  const classList = document.querySelector('.g-search').classList
  classList.remove('d-flex')
  classList.add('d-none')
};

AppFunctions.getFormValues = (e) => {
  e.preventDefault();
  let formDataObj = {};
  Array.prototype.forEach.call(e.target.elements, function (inpt) {
    if (inpt.type !== 'submit') {
      formDataObj[inpt.name] = inpt.value
    }
  });
  return formDataObj;
};


AppFunctions.getMessage = (resp) => {
  if (!resp.ok) {
    if (resp.data && Message.Register[resp.data.error]) {
      return Message.Register[resp.data.error];
    } else {
      return Message.ErrorOccurred;
    }
  }
  return Message.Register.Success;
}

AppFunctions.setStoreData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

AppFunctions.getStoreData = (key) => {
  const value = localStorage.getItem(key);
  if (AppFunctions.isJson(value)) {
    return JSON.parse(value);
  } else {
    return value;
  }
}

AppFunctions.removeStoreData = (key) => {
  localStorage.removeItem(key);
}

AppFunctions.isJson = (params) => {
  try {
    JSON.parse(params);
  } catch (e) {
    return false;
  }
  return true;
}

AppFunctions.calculatePercentage = (param1, param2) => {
  return (((param1 - param2) / param1) * 100).toFixed(0);
}

export default AppFunctions;
