import { createApp } from 'vue'
import router from './router/router.ts'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura';
import './style.css'


createApp(App)
    .use(router)
    .use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 }).mount('#app')
