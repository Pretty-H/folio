<template>
  <section class="min-h-screen px-6 py-12 max-w-6xl mx-auto">
    <h2 class="text-5xl font-extrabold text-purple-900 mb-12 text-center drop-shadow-md">
      Mes Projets
    </h2>

    <div
      v-for="(project, index) in projects"
      :key="project.title"
      :class="[ 
        'border-2 rounded-2xl p-6 mb-6 w-11/12 max-w-3xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-transparent shadow',
        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
      ]"
      @click="openModal(project)"
    >
      <h3 class="text-xl font-semibold mb-4 text-purple-800">
        {{ project.title }}
      </h3>
      <img
        :src="project.images[0]"
        alt="Image projet"
        class="w-full max-h-64 object-contain rounded-xl border border-purple-300 bg-transparent"
      />
    </div>

    <!-- ✅ Modale avec effet flou -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center"
    >
      <div
        class="bg-white/20 backdrop-blur-xl p-6 rounded-2xl w-[95%] max-w-6xl overflow-y-auto max-h-[90vh] border border-purple-800 shadow-xl"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-3xl font-bold text-purple-800">
            {{ selectedProject.title }}
          </h3>
          <button
            @click="selectedProject = null"
            class="text-white bg-purple-700 px-4 py-2 rounded-full shadow hover:bg-purple-800"
          >
            Retour
          </button>
        </div>

        <!-- ✅ Images agrandies -->
        <div class="flex flex-col gap-6 items-center">
          <div
            v-for="(img, index) in selectedProject.images"
            :key="index"
            class="w-full"
          >
            <img
              :src="img"
              alt="Aperçu"
              class="w-full h-auto object-contain rounded-2xl border border-purple-800"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)

const projects = ref([
  {
    title: 'Gestion de bibliothèque (C++)',
    images: [
      '/images/biblio1.png',
      '/images/biblio2.png',
      '/images/biblio3.png',
      '/images/biblio4.png'
    ]
  },
  {
    title: 'Gestion de pret bancaire (Vue.js)',
    images: [
      '/images/vue1.png',
      '/images/vue2.png',
      '/images/vue3.png'
    ]
  },
  {
    title: 'Gestion de pret bancaire (PHP)',
    images: [
      '/images/1php.png',
      '/images/2php.png',
      '/images/3php.png'
    ]
  }
])

function openModal(project) {
  selectedProject.value = project
}
</script>
