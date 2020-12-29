import axios from "axios";

 const api = axios.create({
    baseURL: 'https://valkov.xyz/'
})

export default api