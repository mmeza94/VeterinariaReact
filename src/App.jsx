
import './App.css'
import { Header } from './Components/Header'
import { Formulario } from './Components/Formulario'
import { ListadoPacientes } from './Components/ListadoPacientes'
import { useState, useEffect } from 'react'
import { useFetchApi } from './Hooks/useFetchApi'
import { useDeletePaciente } from './Hooks/useDeletePaciente' 
import { useUpdatePaciente } from './Hooks/useUpdatePaciente'



function App() {



  
  const [ pacientes, setPacientes ] = useState([]);

  const [ paciente, setPaciente ] = useState({});



const GetData = async () => {
  const InitialData = await useFetchApi();
  setPacientes(InitialData);
  console.log('Llamando a GetData....');

}


const UpdateData = async (paciente)=>{
   const res = await useUpdatePaciente(paciente);
   setPaciente({});
   
   
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
  




  const EliminarPaciente = async (id) => {
    
    const res = await useDeletePaciente(id);
    GetData();

  }


  return (
    <div className="content-center">
        <Header/>

      <div className="mt-12 flexNew content-center">
        <Formulario setPacientes = { setPacientes } 
                    pacientes = { pacientes } 
                    paciente = { paciente } 
                    setPaciente = { setPaciente }
                    GetData = { GetData }
                    UpdateData = { UpdateData }/>

        <ListadoPacientes pacientes = { pacientes } 
                          setPaciente= { setPaciente } 
                          EliminarPaciente = { EliminarPaciente }
                          />
      </div>

    </div>
  )
}


export default App
