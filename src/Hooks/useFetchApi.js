import axios from 'axios';


export const useFetchApi = async () => {

    const url = 'https://localhost:7096/veterinaria/api'

    const response = await axios.get(url);

    const data = await response.data;

    return data;

}


