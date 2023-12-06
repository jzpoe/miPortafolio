import "./Navbar.css";
import Foto from "../../public/Foto";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="nav-h2">
        <h2 className="smoke">Perfil Profesional </h2>
      </div>

      <div>
        <Foto src={Foto} alt="avatar profile" />
      </div>
    </div>
  );
};

export default Navbar;
