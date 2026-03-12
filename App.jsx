import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { useState } from 'react'
import { Theme } from './contexts/Theme'

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <Theme.Provider value={[isDark, setIsDark]}>
      <Header  />
      <Outlet context={[isDark, setIsDark]} />
    </Theme.Provider>
  )
}

export default App
