import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from "~/router/index.js";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.use(MotionPlugin)
app.mount('#app')
