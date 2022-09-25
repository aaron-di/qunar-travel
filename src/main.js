import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// fastClick.attach(document.body)
// Vue.use(VueAwesomeSwiper)

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
