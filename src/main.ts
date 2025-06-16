// Plugins
import { registerPlugins } from '@/plugins';
import router from "@/router/router";

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Styles
import '@/assets/css/cerceis.css';
import 'unfonts.css';

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.mount('#app');
