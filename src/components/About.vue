<template>
  <section id="P2" class="grid grid-cols-1 md:grid-cols-2 h-[auto] md:h-[600px] "
  >

    <div class="flex items-center w-[100%] h-[90%] justify-center ">
        <img
          :src="photo"
          alt="Photo profil Hajaina Balisama"
          class="rounded-full h-[32vh] w-[70vw] md:w-[400px] md:h-[400px] object-cover border-3  border-purple-700"
        />  
    </div>
    

    <div class="flex items-center  justify-center w-[100%] h-[80%] gap-6 ">
    <div class="flex flex-col items-center justify-center h-auto mt-[80px] md:mt-0 md:h-[90%] md:w-[80%] w-[90%] rounded-[20px] backdrop-blur-md bg-purple-700/10 py-10 px-5 md:py-0 md:px-[120px] gap-[50px]">
    <div>
         <p class="text-[14px] font-thin text-white leading-loose">
              Curieuse et passionnée par l’informatique, je suis en deuxième année à l’ENI. Je me forme
               activement au développement web, tout en explorant aussi le domaine des
                réseaux (ce n’est pas encore mon point fort, mais je m’y intéresse). 
                Ceci est ma première vitrine, simple mais sincère, et elle marque le début de mon parcours !
        </p>
    </div>
    <div class="w-[100%] flex gap-[15px] ">
       <a href="tel:+261347602905" aria-label="Téléphone" class="text-[white] hover:text-purple-900 transition">
        <font-awesome-icon icon="fa-solid fa-phone" class="w-7 h-7 " />
      </a>

      <a href="mailto:hajainabalisama@gmail.com" aria-label="Email" class="text-[white] hover:text-purple-900 transition">
        <font-awesome-icon icon="fa-solid fa-envelope" class="w-7 h-7 " />
      </a>

      <a href="https://facebook.com/hajainabalisama" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-[white] hover:text-purple-900 transition">
        <font-awesome-icon icon="fa-brands fa-facebook" class="w-7 h-7 " />
      </a>

      <a
        href="https://www.google.com/maps/place/Antsororokavo+Ambany,+Fianarantsoa,+Madagascar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Localisation Madagascar"
        class="text-[white] hover:text-purple-900 transition"
      >
        <font-awesome-icon icon="fa-solid fa-location-dot" class="w-7 h-7 " />
      </a>
    </div>
    </div>

     
    </div>
  </section>
</template>

<script setup>
import photo from '@/assets/photo.jpg'
</script>
