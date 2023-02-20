
import { Pacientes } from "./Pacientes"
import  { useEffect } from 'react'






export const ListadoPacientes = ( { pacientes, setPaciente, EliminarPaciente } ) => {


  





  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-auto">

          {pacientes && pacientes.length 
            ?
              <>
                <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>

                <p className="text-xl mt-5 mb-10 text-center">  
                  Administra tus{' '}
                  <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
                </p>




                <div>
                  {
                      pacientes.map( ( paciente ) => (
                        <Pacientes key={ paciente.citaId }   paciente= { paciente }  setPaciente = { setPaciente } EliminarPaciente = { EliminarPaciente }/>
                      ))
                  }
                </div>
              
              
              
              </>

            :

              <>
                  <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                  <p className="text-xl mt-5 mb-10 text-center">  
                    Comienza agregando pacientes...{' '}
                   
                  </p>
              
              
              </>
          
        
        
        
        
        
        
        
        }





    </div>
  )
}
