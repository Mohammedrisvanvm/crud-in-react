import React from 'react'
import { NavDropdown, Badge } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const LoggedinHeader = (props) => {
console.log(props.userInfo)
  return (
    <>
    <NavDropdown id="username">
      <LinkContainer to={`/profile`}>
        <NavDropdown.Item>profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item>logout</NavDropdown.Item>
    </NavDropdown>
  </>
  )
}

export default LoggedinHeader
