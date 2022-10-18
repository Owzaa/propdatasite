import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import "./slide.css"

function ItemSlide() {
  return (
    <Container className="container pt-5">
    <Carousel variant="light" id="properties">
      <Carousel.Item>
        <img
          width="1440px"
          height="576px"
          className="d-block w-100"
          src="../assets/property1.png"
          alt="First slide"
        />
        <Carousel.Caption id="caption">
       <div className="container"> 
       <h5 className="text-center m-3"> 
            <b>R1,100,000</b> 
        </h5>
        
        <span className="text-muted">
          4 Bedroom house for sale in Stellenbosch
        </span>

        <div className="flex pt-3">
        <img
        
          className="img-responsive fluid m-3"
          src="../assets/Listing-Icons.svg"
          alt="listingIcon"
        /> 4
         <img
          className="img-fluid m-3"
          src="../assets/Listing-Icons-1.svg"
          alt="listingIcon"
        /> 4
         <img
          className="img-fluid m-3"
          src="../assets/Listing-Icons-2.svg"
          alt="listingIcon"
        /> 4
        </div>

        <div className="Container flex text-center text-muted pt-3 ">
        <p className="container">This stylish single-level Cowies Hill home showcases high-quality finishes,
         an easy indoor/outdoor...
         </p>
        </div>


        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         width="1440px"
         height="576px"
          className="d-block w-100"
          src="../assets/property1.png"
          alt="First slide"
        /> 
        <Carousel.Caption id="caption">
       <div className="flex"> 
       <h5 className="text-center m-3"> 
            <b>R1,100,000</b> 
        </h5>
        
        <span className="text-muted">
          4 Bedroom house for sale in Stellenbosch
        </span>


        <div className="flex pt-3">
        <img
          className="img-fluid m-3"
          src="../assets/Listing-Icons.svg"
          alt="listingIcon"
        /> 4
         <img
          className="img-fluid m-3"
          src="../assets/Listing-Icons-1.svg"
          alt="listingIcon"
        /> 4
         <img
          className="img-fluid m-3"
          src="../assets/Listing-Icons-2.svg"
          alt="listingIcon"
        /> 4 
        
       
        </div>
        <div className="Container flex text-center text-muted pt-3 ">
        <p className="container">This stylish single-level Cowies Hill home showcases high-quality finishes,
         an easy indoor/outdoor...
         </p>
        </div>


        </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </Container>
  );
}

export default ItemSlide;