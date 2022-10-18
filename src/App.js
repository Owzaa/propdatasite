import './App.css';
import NavigationBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/carousel-slide/slide';

function App() {
  return (
  <div className='container'>
  <NavigationBar/>  
  
  
  <div className='img-fluid'>
  <Slide/>
  </div>
  </div>
  );
}

export default App;
