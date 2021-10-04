import React from "react";
import Logout from './Logout'
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';


class Navigation extends React.Component {
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>TITLE HERE (WIP)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" to="/" >Home</Nav.Link>
            <Nav.Link as={Link} href="/Favorites" to="/Favorites">Favorties</Nav.Link>
            <Nav.Link as={Link} href="/Shopping" to="/Shopping">Shopping List</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search Here" className="mr-sm-2" />
              <Button variant="success">Search Now!</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
       <Logout/>
      </>
    );
  }
}
export default withAuth0(Navigation);