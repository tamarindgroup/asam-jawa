import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/home.js';
import { Produk } from './component/product';
import { HeaderComponent } from './component/header.js';
import { Artikel } from './component/artikel';
import { Event } from './component/event.js';
import { DetailArtikel } from './component/detail-artikel';
import { Form } from './component/form.js';
import Navbar from './component/navbar.js';
import AnimatedCursor from "react-animated-cursor"
// import { Translate } from './component/Translate';

function App() {  
  return (
    <>
     {/* <Translate /> */}
     <AnimatedCursor 
    innerSize={15}  // Inner circle agak lebih besar
    outerSize={30}  // Outer ring yang lebih besar
    color="255, 165, 0"  // Warna oranye untuk lingkaran luar
    outerAlpha={0.4}  // Transparansi luar untuk efek yang lebih lembut
    innerScale={1.2}  // Skala inner untuk efek menarik saat bergerak
    outerScale={3}  // Skala outer yang lebih besar untuk animasi yang dramatis
    innerStyle={{
        backgroundColor: 'red', // Inner cursor dengan warna hitam solid
        borderRadius: '50%'       // Inner berbentuk lingkaran penuh
    }}
    outerStyle={{
        border: '2px solid rgba(255, 165, 0, 0.8)', // Outer ring dengan garis oranye
        borderRadius: '50%', // Outer berbentuk lingkaran
    }}
/>
      <BrowserRouter>
      <Navbar />
         <Routes>
            <Route path='/'  element={<Home />}  />
            <Route path='detail-artikel/:id' element={< DetailArtikel />} />
            <Route path='/produk' element={<Produk />} />
            <Route path='/artikel' element={<Artikel />} />
            <Route path='/event' element={<Event />}/>
            <Route path='/form' element={<Form />} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
