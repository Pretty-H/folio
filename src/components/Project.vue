<template>
  <section id="P5" class="flex justify-center w-full text-white py-[20px]">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] w-[90%] gap-8">

      <!-- Description -->
      <div class="flex justify-center py-[20px] px-[20px] lg:px-[50px]">
        <div class="flex flex-col gap-10 w-full">
          <div class="flex flex-col gap-4">
            <h2 class="text-[18px] hello">Mes projet</h2>
            <div class="w-[50px] h-[3px] bg-purple-500 rounded-[20px]"></div>
          </div>
          <div class="flex flex-col text-[16px] gap-5">    
            <p class="leading-loose">
              Chaque projet est une histoire dont je tire fierté et nouveaux apprentissages.
            </p>
          </div>
        </div>
      </div>

      <!-- Grille de cartes -->
      <div class="flex items-center justify-center  px-[20px] pb-[20px]">
        <div class="w-full h-full md:p-[20px] grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- ✅ Projets dynamiques -->
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="backdrop-blur-md bg-purple-700/20 overflow-hidden rounded-[20px] h-auto md:h-[380px] flex flex-col"
          >
            <!-- Titre -->
            <div class="flex items-center justify-center text-[17px] font-bold text-center h-[100px] px-[30px]">
              {{ project.title }}
            </div>

            <!-- Image -->
            <img
              :src="project.images[0]"
              alt="Image du projet"
              class="w-full h-full object-cover px-[10px] rounded-xl"
            />

            <!-- Texte + bouton -->
            <div class="flex  p-[10px]  ">
                <div class="flex  items-center py-[10px] text-[14px]">
                <button
                  @click="openModal(project)"
                  class="text-white text-sm bg-purple-600 hover:bg-purple-800 px-4 py-1 rounded-[10px] shadow"
                >
                  Voir plus
                </button>
              </div>
              <div class="flex items-end px-[20px] py-[10px] text-[14px]">
                <button>
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white text-sm bg-purple-600 hover:bg-purple-800 px-4 py-1 rounded-[10px] shadow"
                    >
                      Voir code
                    </a>
                    <span v-else class="text-gray-400 italic text-sm">Pas de code en ligne</span>
                </button>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      <!-- ✅ Modale projet -->
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      >
        <div class="bg-white/20 backdrop-blur-xl p-6 rounded-2xl w-[95%] max-w-6xl overflow-y-auto max-h-[90vh] border border-purple-800 shadow-xl">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-bold text-white">
              {{ selectedProject.title }}
            </h3>
            <button
              @click="selectedProject = null"
              class="text-white bg-purple-700 px-4 py-2 rounded-full shadow hover:bg-purple-800"
            >
              Retour
            </button>
          </div>
          <div class="flex flex-col gap-6 items-center">
            <div
              v-for="(img, i) in selectedProject.images"
              :key="i"
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

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)

const projects = ref([
  {
    title: 'Gestion de prêt bancaire (Vue.js)',
    images: [
      '/images/vue1.png',
      '/images/vue2.png',
      '/images/vue3.png'
    ],
    github: 'https://github.com/Pretty-H/projet-vue.git' 
  },
  {
    title: 'Gestion de prêt bancaire (PHP)',
    images: [
      '/images/1php.png',
      '/images/2php.png',
      '/images/3php.png'
    ],
    github: 'https://github.com/Pretty-H/projet-php.git'
  }
])

function openModal(project) {
  selectedProject.value = project
}
</script>
