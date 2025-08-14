<template>
  <div :style="backgroundStyle" class="background-container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/FondH.jpg',
  '/images/H6.jpg',
   '/images/H2.jpg',
  '/images/H8.jpg'
]

const currentImageIndex = ref(0)
const backgroundStyle = ref({
  backgroundImage: `url(${images[currentImageIndex.value]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  transition: 'background-image 1s ease-in-out'
})

let intervalId = null

// onMounted(() => {
//   intervalId = setInterval(() => {
//     currentImageIndex.value = (currentImageIndex.value + 1) % images.length
//     backgroundStyle.value.backgroundImage = `url(${images[currentImageIndex.value]})`
//   }, 3000) // 10 secondes
// })

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
