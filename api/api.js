import axios from "axios";

 const api = axios.create({
    baseURL: 'http://104.40.185.245:4000/'
})

export default api