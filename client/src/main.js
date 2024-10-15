import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import store from './store/store';
import App from './App.vue'

const app = createApp(App);
app.use(store)
app.mount("#app")


