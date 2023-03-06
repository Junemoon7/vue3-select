<script setup lang='ts'>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useStore } from "../store";
import axios from "axios";
const router = useRouter();
const studentNum = ref("");
//节流函数
const store = useStore();
function throttle(fn, wait = 300) {
  let timer = null;
  return function () {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      fn.apply(context, arguments);
    }
  };
}

const size = ref<"default" | "large" | "small">("default");
const sex = ref("男");
const ChangeDate = (time) => {
  let date = new Date(time);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  m = m > 10 ? m : "0" + m;
  d = d > 10 ? d : "0" + d;
  return y + "-" + m + "-" + d;
};
const value2 = ref("");
const date = ref("");

const SubmitHandel = async () => {
  if (!studentNum.value || !sex.value || !date.value) {
    return alert("请填写信息");
  }
  if (String(studentNum.value).length < 8) {
    return alert("请填写完整学号");
  }
  console.log(toString(studentNum.value).length);

  // router.push({
  //   name: "Result",
  //   params: { studentNum: studentNum.value, sex: sex.value, Date: date.value },
  // });
  // router.push("/Result");
  await store.getList();
  const List = store.list;
  if (List.code == 1) {
    router.push({
      name: "Result",
      params: {
        studentNum: studentNum.value,
        sex: sex.value,
        Date: date.value,
      },
    });
    console.log(List.code);
  } else {
    alert("请求失败");
    console.log(List.code);
  }
};

watch(value2, (value, oldValue) => {
  date.value = ChangeDate(value);
  console.log(date.value);
});
// console.log(ChangeDate(value2));
// const value1 = <Date>ref(ChangeDate(value2))
const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};
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

      <h2>体测成绩查询</h2>
      <p>请输入学号及日期查询体测成绩</p>
    </header>
    <form @submit.prevent="SubmitHandel">
      <label for="">
        <span>输入你的学号</span>
        <input
          type="number"
          v-model="studentNum"
          placeholder="请输入8位学号"
          oninput="if(value.length>8)value=value.slice(0,8)"
        />
        <div class="demo-date-picker">
          <div class="block">
            <span class="demonstration">请选择日期</span>
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="Pick a day"
              :disabled-date="disabledDate"
              :shortcuts="shortcuts"
              :size="size"
            />
            <div class="mb-2 flex items-center text-sm">
              <el-radio-group v-model="sex" class="ml-4">
                <el-radio label="男" size="large">🚹</el-radio>
                <el-radio label="女" size="large">🚺</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </label>
      <input type="submit" value="查  询" />
    </form>
    <footer><span>德学并举 知行合一</span></footer>
  </main>
</template>



<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
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
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: #111827;
  padding: 4rem 1.5rem;
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
footer span {
  font-family: STKaiti;
  font-size: 2.5rem;
  color: #fff;
}
footer {
  background-color: #e11d48;
}
</style>