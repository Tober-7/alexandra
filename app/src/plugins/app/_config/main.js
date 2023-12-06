import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import '@/plugins/app/_themes/tailwind.css'

import { createI18n } from "vue-i18n";  
import sk from "@/plugins/app/_locales/sk.json";

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);
const i18n = createI18n({
    locale: "sk",
    fallbackLocale: "sk",
    messages: { sk },
});

app
.use(router)
.use(i18n)
.use(ToastPlugin, {position: "bottom", duration: 1000, queue: true, pauseOnHover: false})
.mount('#app');
