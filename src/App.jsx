import Home from "./componet/home/Home";
import Formulario from "./customHook/Formulario";

import "./index.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Proyectos } from "./carrusel/proyectos/Proyectos";

function App() {
  return (
    <>
      <section className="layout">
        <Navbar/>
          <Home />
          <Proyectos/>
          
        
          <Formulario />
          <Footer/>
      </section>
      
    </>
  );
}

export default App;
