
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import SignIn from './Page/SignIn';
import Profile from './Page/Profile';
function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
     
    </>
  )
}

export default App
