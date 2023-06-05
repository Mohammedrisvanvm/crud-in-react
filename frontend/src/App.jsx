import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Routes>
         <Route path='/' element={<HomeScreen/>}/>
         <Route path='/login' element={<LoginScreen/>}/>
         <Route path='/register' element={<RegisterScreen/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App


