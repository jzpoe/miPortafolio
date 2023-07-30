import Formulario from "../customHook/Formulario";
const Contact = () => (
  <div>
    <div className="container3">
      <h2>Contacto</h2>

      <div>
        <div>
          <div className="imgGit">
            <a
              href="https://www.linkedin.com/in/jose-rodriguezjz/"
              target="blank"
            >
              <img src="./src/img/linkedin.png" alt="imagen linkedin" />
            </a>

            <div>
              <a href="https://github.com/jzpoe" target="blank">
                <img
                  src="./src/img/logotipo-de-github.png"
                  alt="imagen de git hub"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Formulario />
    </div>
  </div>
);

export default Contact;
