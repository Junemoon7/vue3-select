import axios from 'axios'
const server = axios.create({
    baseURL:"http://localhost:3000"
})
export const getApiList = ()=>
    server.get('/students',{
        params:{
            studentNum:studentNum.value,
            sex:sex.value,
            Date:Date.value
        }
    }).then(res=>res.data)
