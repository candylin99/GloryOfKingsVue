import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/scss/styl.scss'
import './assets/iconfont/iconfont.css'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Card from './components/card.vue'
Vue.component('m-card', Card)

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})


import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')