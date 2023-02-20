
import './App.css'
import { Header } from './Components/Header'
import { Formulario } from './Components/Formulario'
import { ListadoPacientes } from './Components/ListadoPacientes'
import { useState, useEffect } from 'react'
import { useFetchApi } from './Hooks/useFetchApi'



function App() {



  
  const [ pacientes, setPacientes ] = useState([]);

  const [ paciente, setPaciente ] = useState({});



const GetData = async() => {
  const InitialData = await useFetchApi();
  setPacientes(InitialData);
  console.log('Llamando a GetData....');
}


useEffect(() => {
  
  GetData();
  
}, [])

// useEffect(
//   () => {

//     const obtenerLS = () => {

//       JSON.parse(localStorage.getItem('pacientes'))
//          ?? [];
//       //console.log( pacientesLS );
//     }
//     obtenerLS();
//   }
//   ,[])


 
// useEffect(() => {

//   localStorage.setItem('pacientes', JSON.stringify( pacientes ))
//   }, [pacientes])
  




  const EliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);

  }


  return (
    <div className="content-center">
        <Header/>

      <div className="mt-12 flexNew content-center">
        <Formulario setPacientes = { setPacientes } 
                    pacientes = { pacientes } 
                    paciente = { paciente } 
                    setPaciente = { setPaciente }
                    GetData = { GetData }/>

        <ListadoPacientes pacientes = { pacientes } setPaciente= { setPaciente } EliminarPaciente = { EliminarPaciente }/>
      </div>

    </div>
  )
}


export default App
