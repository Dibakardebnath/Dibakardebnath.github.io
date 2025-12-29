import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode');
    // Default to light mode
    return saved ? JSON.parse(saved) : false;
  });

  // Update localStorage and apply to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // Apply dark mode to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-dark-mode', 'true');
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f1f5f9';
    } else {
      document.documentElement.setAttribute('data-dark-mode', 'false');
      document.documentElement.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
  }, [isDarkMode]);

  // Initialize on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-dark-mode', 'true');
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f1f5f9';
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};
