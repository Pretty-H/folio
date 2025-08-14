<template>
  <section id="P4" class="flex justify-center w-full text-white py-[50px]">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] w-[90%] gap-8">

      <!-- Description -->
      <div class="flex justify-center py-[20px] px-[20px] lg:px-[50px]">
        <div class="flex flex-col gap-10 w-full">
          <div class="flex flex-col gap-4">
            <h2 class="text-[18px] hello">Mes expériences</h2>
            <div class="w-[50px] h-[3px] bg-purple-500 rounded-[20px]"></div>
          </div>
          <div class="flex flex-col text-[16px] gap-5">    
            <p class="leading-loose">
              Mes expériences variées m'ont permis de développer des solutions concrètes et innovantes.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center px-[20px] pb-[20px]">
        <div class="w-full h-full md:p-[20px] grid grid-cols-1 md:grid-cols-2 gap-5">

             <div class="backdrop-blur-md bg-purple-700/20 rounded-tl-[30px] rounded-br-[30px] pb-[30px] md:pb-0 h-auto md:h-[380px]">
               <div class="flex items-center justify-center text-[17px] font-bold text-center h-[100px]"> 
                  Stage à venir
               </div>
               <div class="flex flex-col text-[18px] px-[20px]">    
                  <p class="leading-loose">
                    ◉ Mes expériences variées m'ont permis de développer des solutions concrètes et innovantes.
                  </p>
              </div>
            </div>

            <div class="backdrop-blur-md bg-purple-700/20 rounded-tl-[30px] rounded-br-[30px] pb-[30px] md:pb-0 h-auto md:h-[380px]">
               <div class="flex items-center justify-center text-[17px] font-bold text-center h-[100px] px-[50px]"> 
                  Travail en groupe et projets scolaires
               </div>
                <div class="flex flex-col text-[18px] px-[20px]">    
                  <div class="leading-loose">
                    ◉ Analyse et modélisation de bases de données avec la méthode MERISE (MCD, MLD, MCT).
                  </div>
                   <p class="leading-loose">
                    ◉ Réalisation collective des projets de gestion (ex: gestion de bibliothèque, gestion de prêt bancaire, gestion de vente de voiture, gestion de location de films).
                    </p>
                   <p class="leading-loose">
                    ◉ Développement d’une application web en utilisant HTML, CSS, JavaScript et PHP.
                  </p>
              </div>
            </div>
            <div class="backdrop-blur-md bg-purple-700/20 rounded-tl-[30px] rounded-br-[30px] pb-[30px] md:pb-0 h-auto md:h-[380px]">
              <div class="flex items-center justify-center text-[17px] font-bold text-center h-[100px]"> 
                 Compétences développées
               </div>
                <div class="flex flex-col text-[18px] px-[20px]">    
                  <p class="leading-loose">
                    ◉ Travail en équipe et communication.
                  </p>
                   <p class="leading-loose">
                    ◉ Utilisation des outils de gestion de projet.
                  </p>
                  <p class="leading-loose">
                    ◉ Compréhension des phases de conception avant le développement.
                  </p>
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
          { name: 'Python', level: 65 },
          { name: 'PHP', level: 65 }
        ],
        frameworks: [
          { name: 'Vue.js', level: 67 },
          { name: 'TailwindCSS', level: 50 },
        ],
        databases: [
          { name: 'MySQL', level: 58 },
          { name: 'SQLite', level: 50 },
        ],
      }
    }
  }
}
</script>
