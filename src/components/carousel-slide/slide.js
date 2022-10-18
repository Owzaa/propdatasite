import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import "./slide.css"



function Slide() {
  return (
    <div className='Container pt-5 mt-4  img-responsive'>
    <Carousel  className="carousel-container" fade={.8}>
      <Carousel.Item>
        <img
          maxHeight={900}
          className="d-block w-100 fluid img-responsive"
          src="../Assets/headerimage1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="flex container align-middle" id="form-search">
            
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          maxHeight={900}
          className="d-block w-100 img-responsive"
          src="../Assets/headerimage2.jpg"
          alt="Second slide"
        />

    <Carousel.Caption>
      <div className="container-fluid" id="form-search">
      <div className="flex drop-form">
      <DropdownButton
      align="start"
      title="Buy"
      id="buy"
      >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      </div>

      <div className=" flex drop-form ">
      <DropdownButton
      align="start"
      title="Residential"
      id="residential"
      >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      </div>

      <div className="flex  drop-form">
      <input className="form-control" typeof='text-input' 
      size={80} 
      id="text-form" 
      placeholder='Type Area or Surburb'></input>
      </div>
      
      <Container>
      <div className='container mt-5 pb-0' id='submit-button'>
      <Button  className="btn-danger text-white" variant="contained">
        SEARCH    
      </Button>     
      </div>

      <div className='flex container mt-5 pb-0' id='submit-button'>
      <DropdownButton   
      align="start"
      title="More Search Options "
      id="buy"
      >       
      <Dropdown.Item eventKey="2">
     
   
      </Dropdown.Item> 
      </DropdownButton>  
      </div>
      </Container> 
</div>
    
    
    
    </Carousel.Caption>
    </Carousel.Item>
  
    </Carousel>
    </div>
  );
}

export default Slide;