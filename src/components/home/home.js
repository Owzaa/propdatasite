import Button from 'react-bootstrap/Button';
import './home.css';
import ItemSlide from '../carousel-slide/item-slide';
import GroupedServices from '../services/serviceCards';

function Home() {
  return (
    <>
    <div className='flex' >
     <div className="text-center mt-0 pt-0">
        <h1 className="text-center text-lg pt-5 mt-0">
        Lorem ipsum dolor sit amet
        </h1>
     </div>
     <div className="container">
     <p className="text-muted text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In eu scelerisque dui. Proin porta consectetur euismod.
        Duis pharetra dapibus blandit. Aenean lobortis orci a egestas eleifend.
        Pellentesque faucibus mi et interdum molestie. Quisque in diam felis.
        Ut vitae elementum leo.
    </p>
    </div>
    <div className="container text-center">
    <Button className="btn-danger opacity-65 " variant="contained">
    Read more    
    </Button>    
    </div>
<br/>

<section className='property__container'>
    <div className="text-center mt-5 pt-3">
        <h1 className="text-center text-lg pt-0 mt-0">
        Featured Properties 
        </h1>
    </div>

<ItemSlide/>

</section>

<section className="services__container container">

<GroupedServices/>

</section>

</div>
    </>
  );
}

export default Home;