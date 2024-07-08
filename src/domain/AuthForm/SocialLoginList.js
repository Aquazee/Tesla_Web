import React from "react";
import { Constants } from "../../utils";
import { useTheme } from "contexts/ThemeProvider";


const SocialLoginItems = ({ name, icon, path, lastItem }) => {
  const { theme } = useTheme()
  return (
    <a href={`${Constants.BACKEND_DOMAIN}${path}`} className='social' style={{ borderColor: theme.tertiary }}>
      <i className={icon} style={{color: theme.primary}}></i>
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