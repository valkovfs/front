import axios from "axios";

 const api = axios.create({
    baseURL: 'http://159.89.215.95:5000/'
})

export default api