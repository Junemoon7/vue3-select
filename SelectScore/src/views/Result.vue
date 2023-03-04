
<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import data from "../test.json";
import axios from "axios";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { reactive } from "vue";
const testdata = reactive(data);
console.log(testdata);
const router = useRouter();
const route = useRoute();
const Logout = async () => {
  router.push("/");
  const res = await axios({
    method: "get",
    url: "http://127.0.0.1:5173/Result",
    params: {
      // ssession_token = localStorage.getItem('token')
    },
  })
    .then((res) => {
      if (res.status == 200) {
        router.push("./");
      } else {
        alert("返回失败");
      }
    })
    .catch((err) => console.log(err));
};
console.log(route.params);
</script>

<template>
  <main>
    <header>
      <div id="chxy">
        <a href="https://www.chu.edu.cn/" target="blank"
          ><img src="../../img/chxy.png" alt=""
        /></a>
      </div>
      <div class="logo">SELECT SCORE</div>

      <h2>${Name}体测成绩</h2>
    </header>
    <div></div>
    <form>
      <h1>Result</h1>
      <ul>
        <template v-for="(value, key) in testdata">
          <li v-if="value">
            <span v-if="value"> {{ key }}</span>
            <span v-if="value">{{ value }}</span>
            <span v-if="value > 95">优秀</span>
            <span v-if="value >= 80 && value < 95">良好</span>
            <span v-if="value <= 80 && value >= 60">及格</span>
            <span v-if="value < 60">不及格</span>
          </li>
        </template>
        <li>
          <span>总分</span>
          <span></span>
          <span>100</span>
        </li>
      </ul>
      <el-backtop :right="20" :bottom="100" />
      <el-button type="danger" @click="Logout" class="returnHome"
        >返回</el-button
      >
    </form>

    <footer><span>德学并举 知行合一</span></footer>
  </main>
</template>



<style scoped>
ul {
  position: relative;
  width: 100%;
  margin: 100px auto 0;
  padding: 10px;
  box-sizing: border-box;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  margin: 5px 0;
  transition: 0.5s;
}
/* ul li:nth-child(1) {
  background: #fafcff;
  float: left;
}
ul li:nth-child(2) {
  background: #fafcff;
  text-align: right;
} */
ul li span:nth-child(1) {
  display: inline-block;
  width: 33%;
}
ul li span:nth-child(2) {
  display: inline-block;
  width: 67%;
  text-align: right;
}
ul li span:nth-child(3) {
  display: inline-block;
  width: 33%;
  text-align: right;
}
ul li:hover {
  transform: scale(1.06);
  background: #f3f4f6;
}
.ml-4 {
  margin-top: 50px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  background-color: #e11d48;
  color: #fff;
}
header {
  padding: 1.5rem;
  width: 100%;
}
#chxy {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
footer {
  background-color: #fff;
  width: 100%;
  color: #111827;
  text-align: center;
  padding: 1.5rem;
  padding-bottom: 3rem;
}

h2 {
  font-size: 2.125rem;
  margin-bottom: 1rem;
}

h2 ~ p {
  font-weight: 500;
  font-size: 1rem;
}

form {
  flex: 1 1 0%;
  display: block;
  border-radius: 1.5rem 1.5rem 0.5rem 0.5rem;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: #111827;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  width: 100%;
}
label {
  display: block;
  margin-bottom: 1.5rem;
}
label span {
  display: block;
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
input:not([type="submit"]) {
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  background-color: #f3f4f6;
}

input:not([type="submit"])::placeholder {
  color: #9ca3af;
  font-style: italic;
}
input[type="submit"] {
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
  color: ■#FFF;
  background-color: #e11d48;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
}
input[type="submit"]:hover {
  background-color: #c32345;
}
/deep/ input::-webkit-outer-spin-button,
/deep/ input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
/deep/ input[type="number"] {
  -moz-appearance: textfield;
}
.returnHome {
  margin-top: 20px;
  float: right;
}
footer span {
  font-family: STKaiti;
  font-size: 2.5rem;
  color: #fff;
}
footer {
  background-color: #e11d48;
}
</style>
