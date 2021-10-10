import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

// 使用路由插件
Vue.use(VueRouter)


new Vue({
    el: '#app',
    router, 
    render: h => h(App)
})
