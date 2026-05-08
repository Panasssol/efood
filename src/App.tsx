import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './styles/globalStyles'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurante/:id" element={<Restaurant />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
