import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container-navbar">

    <div className="nav-h2">
    <h2 className="smoke">Perfil profesional </h2>
    </div>
      

      <div >
        <img className='container-img'
          src="./src/img/avatar.png"
          alt="avatar profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
