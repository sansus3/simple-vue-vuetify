import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { loadFonts } from './plugins/webfontloader'

import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css';



loadFonts()

const app = createApp(App);
app.use(router)
app.use(vuetify)
app.use(VueAxios, axios)
// Setup plugin for defaults or `$screens` (optional)
app.use(SetupCalendar, {})

app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.provide('$http', app.config.globalProperties.$http) // provide '$http'

app.mount('#app')
