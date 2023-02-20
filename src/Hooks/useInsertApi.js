
import axios from 'axios';


export const useInsertApi = async ( pacienteNuevo ) => {

    const url = 'https://localhost:7096/veterinaria/api'

    //console.log( pacienteNuevo )
    
    const response = await axios.post(url, pacienteNuevo);

    //console.log(response)

}