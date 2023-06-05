import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/' element={<HomeScreen/>}/>
         <Route path='/Login' element={<LoginScreen/>}/>
         <Route path='/Register' element={<RegisterScreen/>}/>
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App


