import { useState, useEffect } from "react"
import { useFormulario } from "../Hooks/useFormulario";
import { useInsertApi } from "../Hooks/useInsertApi";
import { ErrorComponent } from "./ErrorComponent"



export const Formulario = ( { setPacientes, pacientes, paciente, setPaciente, GetData,UpdateData } ) => {



  const {  nombreMascota, propietario, email, FechaAlta, síntomas, onInputChanged,ResetFormularioInputs,setFormularioInputs  } = useFormulario({
    citaId:"",
    nombreMascota:"",
    propietario:"",
    email:"",
    FechaAlta: "",
    síntomas:""
  });

 
 const [error, setError] = useState(false);


  useEffect(() => {
    if(Object.keys(paciente)) //Si el objeto tiene informacion, entonces ...
    {
      //console.log(paciente);
      setFormularioInputs(paciente);
    }
  }, [paciente])
  



 const hanldeSubmit = (e) => {
    e.preventDefault();

    //Validacion de campos vacios...
    if([nombreMascota, propietario, email, FechaAlta, síntomas].includes('')){
      setError(true);
      console.log('Hay un campo vacio')
      return;
    }
    
    setError(false);

    

    const pacienteInstance = { nombreMascota, propietario, email, FechaAlta, síntomas }



    

    

    //Decidimos si va es update o insert
    if(paciente.citaId){

      //Update
      console.log()
      pacienteInstance.citaId = paciente.citaId
      UpdateData( pacienteInstance );
      GetData();

    
    }else{

      //Insert
      useInsertApi( pacienteInstance );
      GetData();
    }

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

          {error && <ErrorComponent/>}



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
                htmlFor="propietario" 
                className="block text-gray-700 uppercase font-bold">

                  Nombre Propietario

            </label>

            <input 
                id="propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="text" 
                placeholder="Nombre del propietario"
                value={ propietario }
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
                htmlFor="FechaAlta" 
                className="block text-gray-700 uppercase font-bold">

                  Alta

            </label>

            <input 
                id="FechaAlta"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type="date" 
                value={ FechaAlta }
                onChange= { onInputChanged }
                />
          </div>


          <div className="mb-5">
            <label 
                htmlFor="síntomas" 
                className="block text-gray-700 uppercase font-bold">

                Síntomas

            </label>

            <textarea
                id="síntomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                placeholder="Descripción"
                value={ síntomas }
                onChange= { onInputChanged }
            />
          </div>



          <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value= { paciente.citaId ? 'Editar Paciente' : 'Agregar Paciente' }/>


        </form>

    </div>
  )
}
