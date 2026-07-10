import './styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook, faYoutube)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
