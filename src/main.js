import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify, {
  theme: {
    primary: '#d32f2f',
    accent: '#ff5252',
    secondary: '#bdbdbd',
    info: '#42a5f5',
    warning: '#ffb300',
    error: '#d50000',
    success: '#81c784'
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
