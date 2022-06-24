import axios from 'axios'


//`https://viacep.com.br/ws/01001000/json/`
export const instance = axios.create({
    baseURL: `https://charges-be.herokuapp.com/`,
})

