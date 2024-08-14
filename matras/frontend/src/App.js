import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contacts from './Pages/Contacts';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='/онас' element={<About/>}/>
          <Route path='/продукция' element={<Products/>}/>
          <Route path='/контакты' element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
