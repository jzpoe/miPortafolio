
import "./Formulario.css"
import { useForm } from "react-hook-form";

const Formulario = () => {
    
const {register,formState : { errors }, handleSubmit} = useForm();

const onSumbit = (data) => {
  console.log(data)
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSumbit)}   >
      <div>
        <label className="form1">Nombre</label>
        <input className="form2" type="text" {...register('nombre', {
          required: true,
          maxLength:30,
        })} />
        {errors.nombre?.type === 'required' && <p>el campo es requerido</p>}
        </div>
        <div><label className="form1">Telefono</label>
        <input className="form2" type="text" {...register('telefono',{
          required: true,
          maxLength:10
        })} />
        {errors.telefono?.type === 'required' &&  <p>el campo es requerido</p>}
        {errors.telefono?.type === 'maxLength' &&  <p>debe tener 10 numeros</p>}        </div>
        
       <div><label className="form1">Correo</label>
        <input className="form2"  type="text" {...register('Correo', {
          pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
        })} />
        {errors.correo?.type === 'pattern' && <p>el correo es invalido</p> }
        </div>
        <input type="submit" value="Contactame !!"  />
    
    </form>

    </div>
      
    
  
  )
}

export default Formulario
