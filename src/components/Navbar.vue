<template>
  <div>
    <div class="hidden h-[80px] w-full backdrop-blur-md bg-[black]/30 z-10 px-[50px] fixed top-0 md:flex items-center justify-between font-[Roboto]">
      <div class="text-[30px] logo text-purple-700">H.</div>
      <div class="flex nav space-x-8 text-white text-[17px] cursor-pointer">
        <div @click="scrollToSection('P1')" class="hover:text-blue-600 border-b border-white font-thin tracking-wide">Home</div>
        <div @click="scrollToSection('P2')" class="hover:text-blue-600 border-b border-white font-thin tracking-wide">About</div>
        <div @click="scrollToSection('P3')" class="hover:text-blue-600 border-b border-white font-thin tracking-wide">Skills</div>
        <div @click="scrollToSection('P4')" class="hover:text-blue-600 border-b border-white font-thin tracking-wide">Experience</div>
        <div @click="scrollToSection('P5')" class="hover:text-blue-600 border-b border-white font-thin tracking-wide">Project</div>
      </div>
    </div>

    <div
      class="md:hidden h-[80px] w-full backdrop-blur-md bg-[black]/30 z-40 px-[25px] fixed top-0 flex items-center justify-between font-[Roboto]"
    >
      <div class="text-[30px] logo text-purple-700">H.</div>
      
      <div
        class="flex flex-col items-center justify-center gap-[5px] cursor-pointer"
        @click="toggleMenu"
      >
        <div class="w-[35px] h-1 rounded-[20px] bg-white"></div>
        <div class="w-[35px] h-1 rounded-[20px] bg-white"></div>
        <div class="w-[35px] h-1 rounded-[20px] bg-white"></div>
      </div>
    </div>

    <div
      v-show="isMenuOpen"
      class="fixed inset-0 z-30"
    >
      <div
        class="absolute inset-0 bg-black/70 transition-all duration-300 ease-in-out"
        :class="{ 'opacity-100': isMenuOpen, 'opacity-0': !isMenuOpen }"
        @click="toggleMenu"
      ></div>
      
      <div
        class="absolute top-0 right-0 flex flex-col bg-black h-screen w-[60vw] gap-2 nav pt-[80px] pl-[30px] text-white text-[25px] transition-all duration-100 ease-in-out z-40"
        :class="{ 'w-[60vw]': isMenuOpen, 'w-0': !isMenuOpen }"
      >
        <div @click="scrollToSectionAndClose('P1')" class="hover:text-blue-600 tracking-wide border-b border-transparent hover:border-white transition-colors duration-200">
          Home
        </div>
        <div @click="scrollToSectionAndClose('P2')" class="hover:text-blue-600 tracking-wide border-b border-transparent hover:border-white transition-colors duration-200">
          About
        </div>
        <div @click="scrollToSectionAndClose('P3')" class="hover:text-blue-600 tracking-wide border-b border-transparent hover:border-white transition-colors duration-200">
          Skills
        </div>
        <div @click="scrollToSectionAndClose('P4')" class="hover:text-blue-600 tracking-wide border-b border-transparent hover:border-white transition-colors duration-200">
          Experience
        </div>
        <div @click="scrollToSectionAndClose('P5')" class="hover:text-blue-600 tracking-wide border-b border-transparent hover:border-white transition-colors duration-200">
          Project
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToSectionAndClose = (id) => {
  scrollToSection(id);
  isMenuOpen.value = false;
};
</script>