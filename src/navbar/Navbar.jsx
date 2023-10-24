import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container-navbar">

      <h2 className="nav-h2">Perfil profesional </h2>

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
