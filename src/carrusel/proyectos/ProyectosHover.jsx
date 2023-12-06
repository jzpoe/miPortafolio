import './proyectosHover.css'
import { dataImg } from "../../dataImg/DataImg"



const ProyectosHover = () => {

   

  return (
    
    <div className="containerProyectos">
        
        <div className="container-imagenes">
        <ul>
            <li>
                console.log(dataImg)
                {dataImg.map((it)=>{
                    
                    <img src={it.imgUrl} alt={`Image ${it.id}`} />
                    console.log(dataImg)
                })}
            </li>
        </ul>
        
        </div>
      
    </div>
    
  )
}

export default ProyectosHover
