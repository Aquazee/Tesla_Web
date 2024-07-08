import React from 'react';
import { useTheme } from '../contexts/ThemeProvider';

function Text({ children, color, ...rest }) {
    const { theme } = useTheme()
    return (
        <span {...rest} style={{ color: theme[color] }}>{children}</span>
    )
}

export default Text;