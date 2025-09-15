<template>
  <div>
    <BackHome />
    <h2>{{ pageName }}</h2>
    <div style="width:1000px;height:1000px;overflow:hidden;">
      <canvas ref="canvasRef" width="1000" height="1000" style="display:block; margin-bottom: 20px;"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import BackHome from '../components/BackHome.vue'
import { usePageName } from '../composables/usePageName.js'
const pageName = usePageName()
const canvasRef = ref(null)
const imgSrc = new URL('../assets/36744.jpg', import.meta.url).href
let img = null
// 缩放倍数
let scale = 1
// 最小缩放倍数
let minScale = 1
// 图片左上角在容器中的偏移量
let offsetX = 0
let offsetY = 0
const containerW = 1000
const containerH = 1000
// 绘制图片并始终居中
function drawImage() {
  const drawW = img.width * scale
  const drawH = img.height * scale
  offsetX = (containerW - drawW) / 2
  offsetY = (containerH - drawH) / 2
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, containerW, containerH)
  ctx.drawImage(img, offsetX, offsetY, drawW, drawH)
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.strokeRect(1, 1, containerW - 2, containerH - 2);
  ctx.restore();
}
// 计算缩放比例，居中显示
const resetImage = () => {
  scale = Math.min(containerW / img.width, containerH / img.height)
  minScale = scale
  drawImage()
}
// 处理滚轮缩放
const handleWheel = (e) => {
  e.preventDefault()
  if (!img || !canvasRef.value) return
  let newScale = scale * (e.deltaY < 0 ? 1.1 : 0.9)
  if (newScale < minScale) newScale = minScale
  if (newScale > minScale * 10) newScale = minScale * 10
  if (newScale === scale) return
  scale = newScale
  drawImage()
}
onMounted(() => {
  const canvas = canvasRef.value
  img = new window.Image()
  img.src = imgSrc
  img.onload = resetImage;
  img.onerror = () => {
    console.error('Failed to load image:', imgSrc);
  };
  canvas.addEventListener('wheel', handleWheel, { passive: false })
})
onUnmounted(() => {
  const canvas = canvasRef.value
  if(canvas){
    canvas.removeEventListener('wheel',handleWheel)
  }
})
</script>
