import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "./nav.css"
function NavigationBar() {
  return (
    <div className='container'>
    <Navbar id="Navbar" sticky='top' collapseOnSelect expand="lg" bg="darker" variant="darker">
    <Container maxWidth>
      <Navbar.Brand href="/">
        <div className='navbrand'>
        <span className='icon-brand'></span>    
        </div>
        <Image src="../assets/logo.svg" id='icon-brand'></Image>
      
      </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto flex-lg-shrink-1 text-white">
            <Nav.Link id="nav-link" href="/">Home </Nav.Link>
            <Nav.Link id="nav-link" href="/property-search">Property Search</Nav.Link>
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