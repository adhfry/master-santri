import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from 'unhead';
import { useToast } from './plugins/toast';
import router  from './router';
import App from './App.vue';
import './style.css';

const pinia = createPinia()
const head = createHead();
const app = createApp(App);

useToast(app);

app.use(pinia);
app.use(head);

app.use(router).mount('#app');
