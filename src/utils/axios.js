import axios from 'axios'
export let Axios = axios.create({
    baseURL : ['http://localhost:5000/api','https://tracker-new-t93k.onrender.com/api'],
    withCredentials : true
});