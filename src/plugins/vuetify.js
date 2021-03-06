import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
  theme: {
    primary: '#26C6DA',
    secondary: '#01579B',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    purple: '#AB47BC'
  },
  iconfont: 'mdi',
  lang: {
    locales: { pt },
    current: 'pt'
  }
})
