import { useEffect, useState } from 'react';

export default function useTheme() {
  // Check local storage or default to light
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the old class
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    // Add the new class
    root.classList.add(theme);
    
    // Save preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}