import React from "react";
import Constants from "../../utils/Constants";
import HoverableDropdown from  '../../components/HoverableDropdown';

const AccountDropDown = ({ name, isLoggedIn, options }) => {
  if(isLoggedIn){
  return <HoverableDropdown label={name} options={Constants.ACCOUNTDROPDOWNLIST}/>
  }else {
    return (<a className="nav-link text-white login-link" href='/login'>
      Login
      <span className="sr-only">(current)</span>
    </a>)
  }
}

export default AccountDropDown;