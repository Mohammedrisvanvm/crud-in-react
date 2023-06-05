import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/' element={<HomeScreen/>}/>
         <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App


