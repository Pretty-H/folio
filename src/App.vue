<template>
  <div id="app" class="h-screen overflow-hidden relative">
    <BackgroundFlowers />
    <div
      ref="scrollContainer"
      class="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth z-10"
      tabindex="0"
    >
      <Home class="snap-start" />
      <About class="snap-start" />
      <Skills class="snap-start" />
      <Experience class="snap-start" />
      <Projects class="snap-start" />
      <Contact class="snap-start" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BackgroundFlowers from './components/BackgroundFlowers.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const scrollContainer = ref(null)
</script>

<style>
#app > div::-webkit-scrollbar {
  display: none;
}
#app > div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
