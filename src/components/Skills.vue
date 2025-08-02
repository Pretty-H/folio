<template>
  <section
    class="h-screen flex flex-col items-center justify-center px-6 text-center snap-start"
  >
    <h2 class="text-5xl font-bold text-purple-800 uppercase mb-10 tracking-wide drop-shadow">
      Compétences
    </h2>

    <div class="space-y-6 text-purple-800 max-w-3xl w-full">
      <div class="text-left">
        <h3 class="font-semibold text-xl mb-4">Langages de programmation</h3>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            C#
          </span>
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            PHP
          </span>
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            Python
          </span>
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            JavaScript
          </span>
        </div>
      </div>
      <div class="text-left">
        <h3 class="font-semibold text-xl mb-4">Frameworks</h3>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            Vue.js
          </span>
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            TailwindCSS
          </span>
        </div>
      </div>

      <div class="text-left">
        <h3 class="font-semibold text-xl mb-4">Base de données</h3>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            MySQL
          </span>
          <span class="px-4 py-2 border-2 border-purple-500 rounded-lg bg-transparent">
            SQLite
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
function scrollToNext() {
  window.scrollTo({
    top: window.innerHeight * 3,
    behavior: 'smooth',
  });
}
</script>
