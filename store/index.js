// import { defineStore } from "pinia";
// import {getApiList} from '../server'
// import {ref} from 'vue'
// import { useLocalStorage } from "@vueuse/core";
// import getApiList from '../server'
// export const useStore = defineStore('counter',{
//     state:()=>({
//         list:()=>getList(),
//         studentNum: '',
//         sex: '男',
//         date: '',


//     }),
//     actions:{
//         async getList(){
//             const result = await getApiList()
//            this.list = result
//            return result
//         }
//     }
// },{persist:{
//     enabled: true,//开启数据持久化
//     strategies: [
//       {
//         key: 'managestate',
//         storage: localStorage,
//       }
//     ]
//   },
// })