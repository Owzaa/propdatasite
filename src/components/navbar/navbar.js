import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "./nav.css"
function NavigationBar() {
  return (
    <div className='flex'>
    <Navbar id="Navbar" sticky='top' collapseOnSelect expand="lg" bg="darker" variant="darker">
    <Container fluid>
      <Navbar.Brand href="/">
        <div className='navbrand'>
        <div className='icon-brand'> 
        <Image src="../assets/logo.svg" id='icon-brand'></Image>
        </div>    
        </div>
      
      </Navbar.Brand>

    <Navbar.Toggle className="nav" aria-controls="responsive-navbar-nav text-white" id="toggle" />

    <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="nav mx-auto ">
            <Nav.Link id="nav-link" href="/">Home </Nav.Link>
            <Nav.Link id="nav-link" href="/property-search">Property-Search</Nav.Link>
            <Nav.Link id="nav-link" href="/tools">Tools</Nav.Link>
            <Nav.Link id="nav-link"  href='/about'>About</Nav.Link> 
            <Nav.Link id="nav-link" href="/contact">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}

export default NavigationBar;