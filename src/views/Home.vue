<template>
  <div class="home-container">
    <h1 class="home-title">{{ config.title }}</h1>
    <div v-for="(group, i) in config.lists" :key="i" class="group-card">
      <h2 class="group-title">{{ group.title }}</h2>
      <div class="button-list">
        <button v-for="btn in group.buttons" :key="btn.name" @click="go(btn.path)" class="home-btn">
          {{ btn.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import config from '../config/homeConfig.js'
import { useRouter } from 'vue-router'
const router = useRouter()
function go(path) {
  if (path) router.push(path)
}
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 48px auto 0 auto;
  padding: 32px 24px 48px 24px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
}
.home-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: 2px;
  color: #222;
}
.group-card {
  background: #f7f8fa;
  border-radius: 12px;
  padding: 24px 20px 20px 20px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);
}
.group-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #3a3a3a;
}
.button-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.home-btn {
  padding: 16px 32px;
  font-size: 18px;
  border-radius: 8px;
  border: 1.5px solid #bfc4cc;
  background: #fff;
  color: #222;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.04);
  transition: all 0.18s;
}
.home-btn:hover {
  background: #3e8ef7;
  color: #fff;
  border-color: #3e8ef7;
  box-shadow: 0 2px 8px 0 rgba(62,142,247,0.12);
}
</style>
