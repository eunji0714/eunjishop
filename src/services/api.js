import axios from "axios";

const shopapi = axios.create({
    baseURL : "http://localhost:8000/api"
})

export default shopapi