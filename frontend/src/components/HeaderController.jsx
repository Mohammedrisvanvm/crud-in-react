import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const HeaderController = () => {
  return (
   <>
       <Nav.Link >
              <Link to={`/login`}> <FaSignInAlt /> Login</Link>
               
               
              </Nav.Link>
         
              <Nav.Link >
              <Link to={`/register`}> <FaSignOutAlt />Register</Link>
              </Nav.Link>
   </>
  )
}

export default HeaderController
