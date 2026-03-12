import { createContext, useContext, useEffect, useState } from 'react'; // Farouk

type Theme = 'dark' | 'light'; // Farouk

interface ThemeContextType { // Farouk
  theme: Theme; // Farouk
  toggleTheme: () => void; // Farouk
} // Farouk

const ThemeContext = createContext<ThemeContextType>({ // Farouk
  theme: 'dark', // Farouk
  toggleTheme: () => {}, // Farouk
}); // Farouk

export function ThemeProvider({ children }: { children: React.ReactNode }) { // Farouk
  const [theme, setTheme] = useState<Theme>(() => { // Farouk
    const saved = localStorage.getItem('theme'); // Farouk
    return (saved as Theme) || 'dark'; // Farouk
  }); // Farouk

  useEffect(() => { // Farouk
    const root = document.documentElement; // Farouk
    if (theme === 'dark') { // Farouk
      root.classList.add('dark'); // Farouk
    } else { // Farouk
      root.classList.remove('dark'); // Farouk
    } // Farouk
    localStorage.setItem('theme', theme); // Farouk
  }, [theme]); // Farouk

  const toggleTheme = () => { // Farouk
    setTheme(prev => prev === 'dark' ? 'light' : 'dark'); // Farouk
  }; // Farouk

  return ( // Farouk
    <ThemeContext.Provider value={{ theme, toggleTheme }}> // Farouk
      {children} // Farouk
    </ThemeContext.Provider> // Farouk
  ); // Farouk
} // Farouk

export const useTheme = () => useContext(ThemeContext); // Farouk
