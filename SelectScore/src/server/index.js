import axios from 'axios'
const server = axios.create({
    baseURL:"http://localhost:3000"
})
export const getApiList = ()=>
    server.get('/students').then(res=>res.data)
