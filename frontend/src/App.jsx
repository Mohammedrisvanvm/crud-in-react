import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/' element={<HomeScreen/>}>

         </Route>
        </Routes>
      </Router>
     
      
    </div>
  )
}

export default App


