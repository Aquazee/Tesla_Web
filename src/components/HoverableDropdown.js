import React, { useState } from 'react';
import Text from './Text';
import { useTheme } from 'contexts/ThemeProvider';
import { useAuth } from 'contexts';

const HoverableDropdown = ({ label = 'Select', color = "#fff", options = [], onSelect }) => {
  const { theme } = useTheme();
  const { logout } = useAuth();

  const onClick = ({ path }) => {
    if (path === '#') {
      logout()
    }
  }
  return (
    <div className="dropdown">
      <a className="nav-link dropdown-toggle" style={{ color }}>
        <Text color={color}>{label}</Text>
      </a>
      <div className="dropdown-content">
        {
          options.map((option, index) => {
            return <a key={`${label}_${index}`} className='text-decoration-none' style={styles.ddList} href={option.path} onClick={() => onClick(option)}>
              <Text color={color || theme.grey3}>
                {option.icon ? <i className={`${option.icon} mr-2`}></i> : null}
                {option.name}
              </Text>
            </a>
          })
        }
      </div>
    </div>
  );
}

const styles = {

}

export default React.memo(HoverableDropdown);
