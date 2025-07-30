<template>
  <section class="min-h-screen px-6 py-12 max-w-4xl mx-auto">
    <h2
      class="text-5xl font-extrabold text-purple-900 mb-12 text-center drop-shadow-md"
    >
      Expérience
    </h2>

    <div
      v-for="(section, index) in sections"
      :key="index"
      :class="[
        'border-2 rounded-2xl p-6 mb-4 w-11/12 max-w-xl text-left border-purple-800 bg-transparent transition-transform duration-300 hover:scale-[1.02] shadow-sm',
        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
      ]"
    >
      <h3 class="text-xl font-semibold mb-2 text-purple-800">
        {{ section.title }}
      </h3>

      <ul class="list-disc list-inside space-y-2 text-purple-700 text-base leading-relaxed">
        <li v-for="(item, idx) in section.items" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const sections = [
  {
    title: 'Stage à venir',
    items: [
      "Participation à la conception et au développement d’un site web d’entreprise."
    ],
  },
  {
    title: 'Travail en groupe et projets scolaires',
    items: [
      'Analyse et modélisation de bases de données avec la méthode MERISE (MCD, MLD, MCT).',
      'Réalisation collective des projets de gestion (ex: gestion de bibliothèque, gestion de prêt bancaire, gestion de vente de voiture, gestion de location de films).',
      'Développement d’une application web en utilisant HTML, CSS, JavaScript et PHP.',
    ],
  },
  {
    title: 'Compétences développées',
    items: [
      'Travail en équipe et communication.',
      'Utilisation des outils de gestion de projet.',
      'Compréhension des phases de conception avant le développement.',
    ],
  },
]
</script>
