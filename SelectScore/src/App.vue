<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "./store";
const store = useStore();
</script>
