import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './home.css'

function Home() {
  return (
    <>
    <div className='flex' >
     <div className="text-center text-muted pt-0">
        <h1 className="text-center text-muted pt-0 mt-0">
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
    <Button className="btn-danger opacity-75 " variant="contained">
    Read more    
    </Button>    
    </div>
    </div>
    </>
  );
}

export default Home;