import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('cdms-theme');
    return saved || 'light';
  });

  const themes = {
    light: {
      name: 'Light',
      primary: '#2563eb',
      secondary: '#f8fafc',
      accent: '#dc2626',
      background: '#ffffff',
      surface: '#f1f5f9',
      text: '#1e293b',
      textSecondary: '#64748b',
    },
    dark: {
      name: 'Dark', 
      primary: '#3b82f6',
      secondary: '#1e293b',
      accent: '#ef4444',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
    }, 
    emergency: {
      name: 'Emergency',
      primary: '#dc2626',
      secondary: '#fee2e2',
      accent: '#f97316',
      background: '#fef2f2',
      surface: '#fef2f2',
      text: '#7f1d1d',
      textSecondary: '#991b1b'
    },
    nature: {
      name: 'Nature',
      primary: '#059669',
      secondary: '#ecfdf5',
      accent: '#d97706',
      background: '#f0fdf4',
      surface: '#f0fdf4',
      text: '#064e3b',
      textSecondary: '#065f46'
    }
  };

  useEffect(() => {
    localStorage.setItem('cdms-theme', theme);
    const root = document.documentElement;
    const currentTheme = themes[theme];
    
    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-secondary', currentTheme.secondary);
    root.style.setProperty('--color-accent', currentTheme.accent);
    root.style.setProperty('--color-background', currentTheme.background);
    root.style.setProperty('--color-surface', currentTheme.surface);
    root.style.setProperty('--color-text', currentTheme.text);
    root.style.setProperty('--color-text-secondary', currentTheme.textSecondary);
  }, [theme, themes]);

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      themes,
      switchTheme,
      currentTheme: themes[theme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};