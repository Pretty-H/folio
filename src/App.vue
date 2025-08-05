<template>
  <div id="app" class="relative h-screen overflow-y-scroll overflow-x-hidden hide-scrollbar">
      <BackgroundFlowers />
      <Navbar/>
      <Home  />
      <About  />
      <Skill  />
      <Experience  />
      <Project  />
      <Contact/>
      <a href="/CV Faux.jpg" download class="fixed  flex items-center text-white justify-center bottom-7 right-7 z-20 w-[180px] h-[40px] bg-purple-800 rounded-[15px] ">
        Télécharger CV
      </a>
      <div class="flex items-center h-[80px] justify-center">
         <p class="text-gray-400 text-xs">
        © 2025 RANDRIANARISOA Hasin'Ny Avo Hajaina Balisama||
        </p>
      </div>
  </div>
</template>

<script setup>
import BackgroundFlowers from './components/BackgroundFlowers.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
</script>
