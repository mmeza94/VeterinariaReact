
import axios from 'axios';


export const useUpdatePaciente = async (pacienteActualizado) => {

    const{citaId} = pacienteActualizado;

    const url = `https://localhost:7096/veterinaria/api/Update/${citaId}`;



    const response = await axios.put(url, pacienteActualizado);

    console.log(response);

    return response;

}