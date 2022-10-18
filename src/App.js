import './App.css';
import NavigationBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/carousel-slide/slide';
import Footer from './components/footer/footer'
function App() {
  return (
  <div className='container-fluid'>
  <NavigationBar/>  
  
  
  <div className='Container'>
  <Slide/>
  </div>

  <Footer/>
  </div>
  );
}

export default App;
