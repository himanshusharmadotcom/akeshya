import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'

const App = () => {

  const theme = {
    colors: {
      primaryColor: "#14279b",
      textColor: "#484848",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App