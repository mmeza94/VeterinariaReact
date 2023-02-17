import { Pacientes } from "./Pacientes"





export const ListadoPacientes = ( { pacientes } ) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-auto">

      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">  
        Administra tus{' '}
        <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
      </p>
      

     

    <div>
      {
          pacientes.map( ( paciente ) => (
            <Pacientes key={ paciente.nombrePropietario}   paciente= { paciente }/>
          ))
      }
    </div>



    </div>
  )
}
