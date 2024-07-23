import { createApp } from 'vue'
import './style.css'
import { useToast } from './plugins/toast';


import router  from './router'
import App from './App.vue'

const app = createApp(App);

useToast(app);


app.use(router).mount('#app');
