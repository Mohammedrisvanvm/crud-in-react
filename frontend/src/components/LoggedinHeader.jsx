import React from 'react'
import { NavDropdown, Badge } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../slices/AuthSlice'
import { useLogoutMutation } from '../slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const LoggedinHeader = ({value}) => {
const dispatch=useDispatch()
const navigate=useNavigate()
  const [logoutApiCall]=useLogoutMutation();
const logoutHandler=async()=>{
try {
  await 
} catch (error) {
  
}
}
  return (
    <>
    <NavDropdown title={value.name} id="username">
      <LinkContainer to={`/profile`}>
        <NavDropdown.Item>profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}>logout</NavDropdown.Item>
    </NavDropdown>
  </>
  )
}

export default LoggedinHeader
