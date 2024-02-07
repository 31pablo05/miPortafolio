// ThemeToggle.js
import React, { useState } from 'react';

const ThemeToggle = ({ defaultTheme, children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return children({ theme, toggleTheme });
};

export default ThemeToggle;
