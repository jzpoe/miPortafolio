import './proyectosHover.css';
import { dataImg } from '../../dataImg/DataImg';

export const ProyectosHover = () => {
  return (
    <div className="containerProyectos">
      <div className="container-imagenes">
        <ul>
          {dataImg.map((it) => (
            <li key={it.id}>
              <img src={it.imgUrl} alt={`Image ${it.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

