import React from "react";
import { Constants } from "../../utils";


const SocialLoginItems = ({ name, icon, path, lastItem }) => {
  return (
    <a href={`${Constants.BACKEND_DOMAIN}${path}`} className={`social`}>
      <i className={icon}></i>
    </a>
  )
}

const SocialLoginList = () => {
  return (
    <div className="social-container">
      {Constants.SOCIALLOGINS.map((item, index) => {
        if (item.is_active) {
          return <SocialLoginItems key={`SocialLoginItems_${index}`} {...item} lastItem={Constants.SOCIALLOGINS.length === (index + 1)} />
        }
      })}
    </div>
  )
}

export default SocialLoginList;