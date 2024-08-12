import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Administrator from './Administrator'
import Create from './Create'
import Update from './Update'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Administrator/>}/>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
