import { createContext, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light', // default theme
  switchTheme: () => {}, // noop function
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
