

import React from 'react'

export const Pacientes = ({ paciente, setPaciente, EliminarPaciente }) => {


  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    
    if(respuesta){

      EliminarPaciente(paciente.citaId);
    }
  }



  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{ paciente.nombreMascota }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{ paciente.propietario }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{paciente.email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{ paciente.FechaAlta }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">{ paciente.síntomas }</span>
        </p>



        <div className='flex justify-between mt-10'>
          <button type='button'
                  className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                  onClick={ () => setPaciente( paciente ) }>
              Editar
          </button>

          <button type='button'
                  className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                  onClick={ handleEliminar }>
              Eliminar
          </button>

        </div>

      </div>
  )
}
