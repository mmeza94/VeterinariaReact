
import './App.css'
import { Header } from './Components/Header'
import { Formulario } from './Components/Formulario'
import { ListadoPacientes } from './Components/ListadoPacientes'
import { useState } from 'react'


function App() {
  
  const [ pacientes, setPacientes ] = useState([]);

  return (
    <div className="content-center">
        <Header/>
      <div className="mt-12 flexNew content-center">
        <Formulario setPacientes = { setPacientes } pacientes = { pacientes } />
        <ListadoPacientes pacientes = { pacientes }/>
      </div>
    </div>
  )
}

// mt-12 flex content-center max-w-full

export default App
