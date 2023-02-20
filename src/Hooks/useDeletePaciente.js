import axios from 'axios';


export const useDeletePaciente = async (id) => {
    const url = `https://localhost:7096/veterinaria/api/${id}`;

    const response = await axios.put(url);

    console.log(response);
    return response;

}