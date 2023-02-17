import { useState } from "react"
import { useFormulario } from "../Hooks/useFormulario";



export const Formulario = ( { setPacientes, pacientes } ) => {

  const {  nombreMascota, nombrePropietario, email, alta, sintomas, onInputChanged,ResetFormularioInputs  } = useFormulario({
    nombreMascota:"",
    nombrePropietario:"",
    email:"",
    alta: "",
    sintomas:""

});

 
const [error, setError] = useState(false);




 const hanldeSubmit = (e) => {
    e.preventDefault();
    if([nombreMascota, nombrePropietario, email, alta, sintomas].includes('')){
      setError(true);
      console.log('Hay un campo vacio')
      return;
    }

    setError(false);

    setPacientes( [ ...pacientes, {nombreMascota, nombrePropietario, email, alta, sintomas} ] );

    ResetFormularioInputs();
 }




  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>


        <p className="text-lg mt-5 text-center mb-10">Agrega pacientes y{' '}
        <span className="text-indigo-600 font-bold">Administrálos</span>
        </p>


        <form onSubmit={ hanldeSubmit } 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && (<p className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"> Todos los campos son obligatorios </p>)}



          <div className="mb-5">
            <label 
                htmlFor="nombreMascota" 
                className="block text-gray-700 uppercase font-bold">

                  Nombre Mascota

            </label>

            <input 
                id="nombreMascota" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="text" 
                placeholder="Nombre de la mascota"
                value={ nombreMascota }
                onChange= { onInputChanged }/>
          </div>


          <div className="mb-5">
            <label 
                htmlFor="nombrePropietario" 
                className="block text-gray-700 uppercase font-bold">

                  Nombre Propietario

            </label>

            <input 
                id="nombrePropietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="text" 
                placeholder="Nombre del propietario"
                value={ nombrePropietario }
                onChange= { onInputChanged }/>
          </div>


          <div className="mb-5">
            <label 
                htmlFor="email" 
                className="block text-gray-700 uppercase font-bold">

                  Email

            </label>

            <input 
                id="email"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="email" 
                placeholder="Email Contacto Propietario"
                value={ email }
                onChange= { onInputChanged }/>
          </div>

          <div className="mb-5">
            <label 
                htmlFor="alta" 
                className="block text-gray-700 uppercase font-bold">

                  Alta

            </label>

            <input 
                id="alta"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="date" 
                value={ alta }
                onChange= { onInputChanged }
                />
          </div>


          <div className="mb-5">
            <label 
                htmlFor="sintomas" 
                className="block text-gray-700 uppercase font-bold">

                Síntomas

            </label>

            <textarea
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                placeholder="Descripción"
                value={ sintomas }
                onChange= { onInputChanged }
            />
          </div>



          <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value= "Agregar Paciente"/>


        </form>

    </div>
  )
}
