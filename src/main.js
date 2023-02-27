import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import './assets/main.css';
import {createPinia} from "pinia";
import {useMenuStore} from "@/store/menuStore.js";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');


const menuStore = useMenuStore();
await menuStore.fetchMenus();
