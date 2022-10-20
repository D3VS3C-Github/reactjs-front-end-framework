import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';
import './Navbar.scss';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='fw-bold' href="/">
          <img src={logo} 
               className="Nav-logo" 
               alt="logo" />
          React Beta.1
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="/">
              HOME
            </Nav.Link>
            <Nav.Link href="/resources">
              RESOURCES
            </Nav.Link>
            <Nav.Link href="/to-do">
              TO-DO
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default BasicExample;
