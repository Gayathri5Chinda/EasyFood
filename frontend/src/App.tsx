import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CompleteTrans } from './pages/CompleteTrans'
import { NutrientStat } from './pages/NutrientStat'
import { Profile } from './pages/Profile'
import { Food } from './pages/Food'
import { Item } from './pages/Item'
import { Cart } from './pages/Cart'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/food" element={< Food />} />
        <Route path="/signin" element={<Signin />} />
          <Route path="/" element={< Signup/>} />
          <Route path="/stat" element={<NutrientStat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/item" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/trans" element={<CompleteTrans />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
