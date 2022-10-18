import './App.css';
import NavigationBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/carousel-slide/slide';
import Footer from './components/footer/footer';
import Home from './components/home/home.js';
function App() {
  return (
  <div className='flex'>
  <NavigationBar/>  
  
  
  <div className='Container'>
  <Slide/>

  </div>
<Home/>
<Footer/>

</div>
  );
}

export default App;
