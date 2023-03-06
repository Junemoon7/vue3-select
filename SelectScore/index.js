import axios from 'axios';
import express from 'express'
const app = express();

let StudentArray = {
  code: 1,
  msg: null,
  data: [
    {
      name: "引体向上",
      result: "16",
      socre: "100",
      grade: "优秀",
    },
    { name: "身高体重", result: "20.4", socre: "100", grade: "优秀" },
    { name: "引体向上", result: "16", socre: "100", grade: "优秀" },
    { name: "坐位体前屈", result: "21.1", socre: "100", grade: "优秀" },
    { name: "立定跳远", result: "252", socre: "100", grade: "优秀" },
    { name: "肺活量", result: "5032", socre: "100", grade: "优秀" },
    { name: "千米小长跑", result: "3'32", socre: "100", grade: "优秀" },
    { name: "五十米", result: "7.4", socre: "100", grade: "优秀" },
  ],
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  //Access-Control-Allow-Method 允许的请求方式
  //Access-Control-Allow-Headers 允许传递的请求头
  next();
});
// const router = express.Router()
// app.use(router)
// router.get('/students',async (req,res)=>{
//     const result = await axios.get('http://localhost:3000/students')
//     res.json({
//         data:result.data

//     }
//     )
//     console.log(result.data);
// })
app.get("/students", (req, res) => {
  //返回学生信息

  console.log("Get Request");
  res.send({
    code: 1,
    msg: null,
    data: [
      {
        name: "引体向上",
        result: "16",
        socre: "100",
        grade: "优秀",
      },
      { name: "身高体重", result: "20.4", socre: "100", grade: "优秀" },
      { name: "引体向上", result: "16", socre: "100", grade: "优秀" },
      { name: "坐位体前屈", result: "21.1", socre: "100", grade: "优秀" },
      { name: "立定跳远", result: "252", socre: "100", grade: "优秀" },
      { name: "肺活量", result: "5032", socre: "100", grade: "优秀" },
      { name: "千米小长跑", result: "3'32", socre: "100", grade: "优秀" },
      { name: "五十米", result: "7.4", socre: "100", grade: "优秀" },
    ],
  });
});
// //定义一个添加学生的路由
// app.post("/students", (req, res) => {
//   console.log("Post Request", req.body);
//   const { name, age, adress } = req.body;
//   //将学生信息添加到数组
//   StudentArray.push({
//     id: String(Number(StudentArray.at(-1).id) + 1),
//     name,
//     age: String(age),
//     adress,
//   });
//   //添加成功
//   res.send({
//     status: "ok",
//     data: StudentArray,
//   });
// });
// //查询某个学生的路由
// app.get("/students/:id", (req, res) => {
//   const id = req.params.id;
//   const stu = StudentArray.find((e) => e.id === id);
//   res.send({
//     status: "ok",
//     data: stu,
//   });
// });

// //定义一个删除学生的路由
// app.delete("/students/:id", (req, res) => {
//   console.log("Delete Request");
//   const id = req.params.id;
//   const BeforeDeleteElement = StudentArray.find((v) => v.id === id);
//   const result = StudentArray.filter((v) => v.id != id);
//   // console.log(result);
//   StudentArray = result;
//   res.send({
//     status: "ok",
//     data: BeforeDeleteElement
//       ? BeforeDeleteElement
//       : "Error Student Information is undefinded",
//   });
// });

// app.delete('/students/:id',(req,res)=>{
//     const id = req.params.id
//     for(let i =0;i<StudentArray.length;i++){
//         if (StudentArray[i].id === id){
//             const result = StudentArray[i]
//              StudentArray.splice(i,1)
//             res.send({
//                 status:'ok',
//                 data:result
//             })
//             return
//         }
//     }
//     res.status(403).send({
//         status:'Error',
//         data:'Student ID is undefinded'
//     })
// })

// app.delete()
//定义一个修改学生的路由
// app.put()
app.listen(3000, () => {
  console.log("server is running");
});