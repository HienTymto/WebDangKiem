import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

// Explicitly import IconsPlugin separately
import PrimeVue from 'primevue/config'
const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
