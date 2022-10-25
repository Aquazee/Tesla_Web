import Message from '../utils/Message';

const AppFunctions = {};

AppFunctions.getStoredUserDetails = () => JSON.parse(localStorage.getItem('user'));

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
    if (Message.Register[resp.data.error]) {
      return Message.Register[resp.data.error];
    } else {
      return Message.ErrorOccurred;
    }
  }
  return Message.Register.Success
}

export default AppFunctions;
