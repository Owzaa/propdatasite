import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"



function Slide() {
  return (
    <div className='Container responsive-image'>
    <Carousel  className="carousel-container" fade={.8}>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive-image"
          src="../Assets/headerimage1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Assets/headerimage2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
  
    </Carousel>
    </div>
  );
}

export default Slide;