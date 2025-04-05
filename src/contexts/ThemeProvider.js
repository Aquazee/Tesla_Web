import React, { useState, useEffect, createContext, useContext } from 'react';
import Constants from  'utils/Constants'


const ThemeContext = createContext({});

const COMMON_LIGHT_THEME = {
  background: '#fff',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  white: '#FFFFFF',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: '#e3e6e8'
}

const COMMON_DARK_THEME = {
  background: '#080808',
  grey5: '#393e42',
  grey4: '#43484d',
  grey3: '#5e6977',
  grey2: '#86939e',
  grey1: '#bdc6cf',
  grey0: '#e1e8ee',
  white: '#080808',
  success: '#439946',
  error: '#bf2c24',
  warning: '#cfbe27',
  disabled: '#e3e6e8'
}

export const THEMES = {
  light: {
    primary: '#ED9455',
    secondary: '#FFBB70',
    tertiary: '#FFEC9E',
    quaternary: '#FFFBDA',
    ...COMMON_LIGHT_THEME,
  },
  light1: {
    primary: '#ACE1AF',
    secondary: '#B0EBB4',
    tertiary: '#BFF6C3',
    quaternary: '#E0FBE2',
    ...COMMON_LIGHT_THEME,
  },
  dark: {
    primary: '#597445',
    secondary: '#658147',
    tertiary: '#729762',
    quaternary: '#E7F0DC',
    ...COMMON_DARK_THEME
  }
}

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEMES.light);
  const [selectedTheme, setSelectedTheme] = useState(THEMES.light);

  function changeTheme(theme) {
    if (theme === Constants.THEME_TYPES.LIGHT) {
      setTheme(THEMES.light);
      setSelectedTheme(Constants.THEME_TYPES.LIGHT)
    } else {
      setTheme(THEMES.dark);
      setSelectedTheme(Constants.THEME_TYPES.DARK)
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, selectedTheme, changeTheme }}>{props.children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
