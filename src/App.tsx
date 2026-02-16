import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Disclamer from './Components/Disclamer'
import Policy from './Components/Policy'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disclamer" element={<Disclamer />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
