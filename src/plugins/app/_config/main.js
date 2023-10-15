import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.config.globalProperties.$isAuthenticated = false;
	
app.use(router).mount('#app');

export default app.config.globalProperties;