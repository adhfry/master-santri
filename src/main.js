import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { useToast } from './plugins/toast';


import router  from './router'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App);
app.use(pinia)

useToast(app);


app.use(router).mount('#app');
