<template>
  <button class="back-home-btn" @click="goHome">返回首页</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<style scoped>
.back-home-btn {
  padding: 10px 24px;
  font-size: 16px;
  border-radius: 6px;
  border: 1.5px solid #bfc4cc;
  background: #fff;
  color: #222;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 18px;
  margin-top: 8px;
  transition: all 0.18s;
}
.back-home-btn:hover {
  background: #3e8ef7;
  color: #fff;
  border-color: #3e8ef7;
}
</style>
