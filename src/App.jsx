import Home from "./componet/Home";
import Projects from "./componet/Projects";
import Contact from "./componet/Contact";

import './imagen.css'
import "./index.css";

function App() {
  return (
    <>
      <section className="layout">
        <div className="column">
          <Home />
        </div>
        <div className="column">
          <Projects />
        </div>
        <div className="column">
          <Contact />
        </div>
        
      </section>
      
    </>
  );
}

export default App;
