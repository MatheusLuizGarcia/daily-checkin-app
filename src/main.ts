import { createApp } from 'vue'
import './style.css'
import router from './router/router.ts'
import App from './App.vue'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
