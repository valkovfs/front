import axios from "axios";

 const api = axios.create({
    baseURL: 'https://valkovdev.herokuapp.com/'
})



export default api