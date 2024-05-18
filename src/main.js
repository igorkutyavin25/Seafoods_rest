import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import reset from './assets/css/reset.css'
import fonts from './assets/css/fonts.css'
import baseScss from './assets/scss/_base.scss'
import errorScss from './assets/scss/_error.scss'
import formScss from './assets/scss/_form.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(reset)
  .use(fonts)
  .use(baseScss)
  .use(errorScss)
  .use(formScss)
  .mount('#app')
