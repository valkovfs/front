import axios from "axios";

 const api = axios.create({
    baseURL: 'https://back-env.eba-mur2bxyw.eu-central-1.elasticbeanstalk.com/'
})

export default api