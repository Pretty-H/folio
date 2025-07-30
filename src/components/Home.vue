<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 relative snap-start"
  >

<img
  :src="photo"
  alt="Photo profil Hajaina Balisama"
  class="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover mb-12 shadow-lg border-4 border-purple-500"
/>


    <h1 class="text-3xl sm:text-5xl font-bold text-purple-800 mb-2">
      Bonjour <br></br><br>
            C'est Hajaina
    </h1><br></br>
    <p class="text-lg sm:text-xl text-purple-700 mb-6">
      Développeur Fullstack
    </p>

    
    <div class="flex flex-wrap justify-center gap-6 mb-6">
      
      <a href="tel:+261347602905" aria-label="Téléphone" class="hover:text-purple-900 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.37 2.39.72 3.52a2 2 0 0 1-.45 2.11L9.7 10.7a16 16 0 0 0 6.59 6.59l1.35-1.35a2 2 0 0 1 2.11-.45c1.13.35 2.31.59 3.52.72a2 2 0 0 1 1.72 2z"/>
        </svg>
      </a>

      <a href="mailto:hajainabalisama@gmail.com" aria-label="Email" class="hover:text-purple-900 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>

      <a href="https://facebook.com/hajainabalisama" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-purple-900 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.25 0-1.64.78-1.64 1.58v1.89h2.8l-.45 2.89h-2.35v6.99C18.34 21.13 22 17 22 12z"/>
        </svg>
      </a>

      <a
        href="https://www.google.com/maps/place/Antsororokavo+Ambany,+Fianarantsoa,+Madagascar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Localisation Madagascar"
        class="hover:text-purple-900 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21c-4.97 0-9-5-9-9a9 9 0 1 1 18 0c0 4-4 9-9 9z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </a>
    </div>

    <!-- <button
      @click="scrollToNext"
      class="px-5 py-2.5 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
    >
      Découvrir plus
    </button> -->
  </section>
</template>

<script setup>
import photo from '@/assets/photo.jpg';

function scrollToNext() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>
