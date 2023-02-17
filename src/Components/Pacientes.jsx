

import React from 'react'

export const Pacientes = ({ paciente }) => {
  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{ paciente.nombreMascota }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{ paciente.nombrePropietario }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{paciente.email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{ paciente.alta }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">{ paciente.sintomas }</span>
        </p>

      </div>
  )
}
