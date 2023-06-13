import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

function AdminHeader({search,setSearch}) {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/admin'>CRUD APP</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className="searchBox">
            <input type="text" placeholder='search user' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <FiSearch style={{backgroundColor:'white'}} ></FiSearch>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}
export default AdminHeader

