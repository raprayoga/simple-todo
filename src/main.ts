import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
