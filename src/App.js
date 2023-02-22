import './App.css';
import Mynav from './Mynav';
import "bootstrap/dist/css/bootstrap.css"
import Slider from './Slider';
import Footer from './Footer';
import Products from './Products';
import Counter from './Counter';
import Error from './Error';
import { Route, Routes } from 'react-router-dom';
import Productes_Content from './Productes_Content';
import Login from './login/Login';
import Call from './Call';
import Call2 from './Call2';
import Call3 from './Call3';
function App() {
  return (
    <div className="bg-dark">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Call />} />
        <Route path="/productes" element={<Call2 />} />
        <Route path="/productes/:id" element={<Productes_Content />} />
        <Route path="/about" element={<Call3 />} />
        {/* 
        
        <Counter /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
