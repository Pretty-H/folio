<template>
  <section id="P1" class="flex items-center justify-center w-screen h-screen">
    <div class="w-[85vw] h-[36vh] md:w-[410px] md:h-[300px] flex items-center justify-center border border-purple-700 bg-transparent">
      <div class="w-[80vw] h-[34vh] md:w-[400px] md:h-[290px] flex items-center justify-center border border-purple-700 bg-transparent">
        <div class="w-[75vw] h-[32vh] md:w-[370px] md:h-[260px] flex flex-col gap-5 items-center justify-center bg-white">
          
          <div class="text-[45px] hello text-gray-600 font-[Roboto_Slab]">
            <p>Hello</p>
          </div>
          
          <div class="flex items-center justify-center h-[50px] overflow-hidden">
            <p
              :class="['typewriter', { 'erasing': isErasing }]"
              class="text-purple-800 text-xl"
            >
              {{ currentText }}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: [
       "Bienvenue sur mon portfolio !",
        "Je m'appelle Hajaina",
        "Je suis un développeur web"
      ],
      currentIndex: 0,
      currentText: "",
      isErasing: false,
    };
  },
  mounted() {
    this.typeText(this.texts[this.currentIndex]);
  },
  methods: {
    typeText(textToType) {
      const typeSpeed = 100;
      let i = 0;
      const interval = setInterval(() => {
        if (i < textToType.length) {
          this.currentText += textToType.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            this.eraseText();
          }, 2000); // Temps de pause avant d'effacer (2 secondes)
        }
      }, typeSpeed);
    },
    
    eraseText() {
      const eraseSpeed = 50;
      const textToErase = this.currentText;
      let i = textToErase.length;
      const interval = setInterval(() => {
        if (i > 0) {
          this.currentText = textToErase.substring(0, i - 1);
          i--;
        } else {
          clearInterval(interval);
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          setTimeout(() => {
            this.typeText(this.texts[this.currentIndex]);
          }, 500); // Délai avant de taper le prochain texte (0.5 seconde)
        }
      }, eraseSpeed);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/* Animations CSS */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.hello {
    font-family: 'Roboto Slab', serif;
    font-weight : 'normal';
}

.typewriter {
    ont-family : 'Roboto', serif;
    font-weight : normal;
  white-space: nowrap;
  border-right: 2px solid purple;
  animation: blink 0.7s steps(1, end) infinite;
  display: inline-block;
  vertical-align: top;
}
</style>