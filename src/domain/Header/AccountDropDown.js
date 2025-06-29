import React from "react";
import Constants from "../../utils/Constants";
import HoverableDropdown from "../../components/HoverableDropdown";
import Text from "components/Text";
import { useTheme } from "contexts/ThemeProvider";

const AccountDropDown = ({ name, isLoggedIn, options }) => {
  const { theme } = useTheme();
  if (isLoggedIn) {
    return (
      <HoverableDropdown label={name} options={Constants.ACCOUNTDROPDOWNLIST} />
    );
  } else {
    return (
      <a className="nav-link login-link" href="/login">
        <Text color={theme.quaternary}>Login</Text>
        <Text className="sr-only">(current)</Text>
      </a>
    );
  }
};

export default AccountDropDown;
