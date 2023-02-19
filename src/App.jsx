
import './App.css'
import { Header } from './Components/Header'
import { Formulario } from './Components/Formulario'
import { ListadoPacientes } from './Components/ListadoPacientes'
import { useState, useEffect } from 'react'


function App() {
  
  const [ pacientes, setPacientes ] = useState([]);

  const [ paciente, setPaciente ] = useState({});

useEffect(
  () => {

    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))
         ?? [];
      console.log( pacientesLS );
    }
    obtenerLS();
  }
  ,[])


 
useEffect(() => {

  localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])
  




  const EliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);

  }


  return (
    <div className="content-center">
        <Header/>

      <div className="mt-12 flexNew content-center">
        <Formulario setPacientes = { setPacientes } pacientes = { pacientes } paciente = { paciente } setPaciente = { setPaciente }/>

        <ListadoPacientes pacientes = { pacientes } setPaciente= { setPaciente } EliminarPaciente = { EliminarPaciente }/>
      </div>

    </div>
  )
}

// mt-12 flex content-center max-w-full

export default App
