<template>
  <section id="P3" class="flex justify-center w-full text-white py-[20px]">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] w-[90%] gap-8">

      <!-- Description -->
      <div class="flex justify-center py-[20px] px-[20px] ">
        <div class="flex flex-col gap-10 w-full">
          <div class="flex flex-col gap-4">
            <h2 class="text-[18px] hello">Mes compétences</h2>
            <div class="w-[50px] h-[3px] bg-purple-500 rounded-[20px]"></div>
          </div>
          <div class="flex flex-col text-[16px] gap-5">    
            <p class="leading-loose">
              Passionné par le développement web, je maîtrise plusieurs technologies modernes que j'enrichis constamment à travers mes projets.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center px-[20px] pb-[20px]">
        <div class="w-full h-full p-[20px] grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[45px]">

          <div class="space-y-4">
            <h3 class="text-[15px] mb-4 font-semibold">Langages de programmation</h3>
            <div v-for="skill in skills.languages" :key="skill.name" class="ml-[10px]">
              <div class="mb-1 text-sm font-medium text-gray-200">
                {{ skill.name }} ({{ skill.level }}%)
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-[15px] mb-4 font-semibold">Frameworks et Bibliothèque</h3>
            <div v-for="skill in skills.frameworks" :key="skill.name" class="ml-[10px]">
              <div class="mb-1 text-sm font-medium text-gray-200">
                {{ skill.name }} ({{ skill.level }}%)
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-[15px] font-semibold mb-4">Bases de données</h3>
            <div v-for="skill in skills.databases" :key="skill.name" class="ml-[10px]">
              <div class="mb-1 text-sm font-medium text-gray-200">
                {{ skill.name }} ({{ skill.level }}%)
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      skills: {
        languages: [
          { name: 'C#', level: 50 },
          { name: 'JavaScript', level: 53 },
          { name: 'Python', level: 55 },
          { name: 'PHP', level:64 }
        ],
        frameworks: [
          { name: 'Vue.js', level: 65 },
          { name: 'TailwindCSS', level: 50 },
        ],
        databases: [
          { name: 'MySQL', level: 60 },
          { name: 'SQLite', level: 50 },
        ],
      }
    }
  }
}
</script>
