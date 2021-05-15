import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Router from 'vue-router'

// import html2canvas from 'html2canvas'
// Vue.use(html2canvas)

// step1：引入 axios
// import Axios from 'axios'
// Vue.config.productionTip = false
//     // step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
//     // 不需要每次都 import一下 axios了，直接使用 $axios 即可
// Vue.prototype.$axios = Axios
//     // step3：使每次请求都会带一个 /api 前缀 
// Axios.defaults.baseURL = '/api'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

// Vue.use(Router)
import './style/index.css' // global css

// import store from './store'
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

import vuecolorpickerboard from 'vue-color-picker-board'
Vue.use(vuecolorpickerboard)



import 'normalize.css/normalize.css' // a modern alternative to CSS resets

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')