import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faLocationDot, faCircle  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub   } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MotionPlugin } from '@vueuse/motion';
import VueScrollTo from 'vue-scrollto'



// Ajoute les icônes à la bibliothèque
library.add(faPhone, faEnvelope, faLocationDot, faFacebook)

// Crée l'application Vue
const app = createApp(App)

app.use(MotionPlugin)

app.use(VueScrollTo)
// Déclare le composant FontAwesome globalement
app.component('font-awesome-icon', FontAwesomeIcon)

// Monte l'application
app.mount('#app')
