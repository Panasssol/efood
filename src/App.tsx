import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
