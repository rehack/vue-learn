import Vue from 'vue'
import App from './App'
// 引入store
import store from './store' // 里面包括使用Vuex Vue.use(Vuex) 和创建store实例
Vue.config.productionTip = false

const vm = new Vue({
    el: '#app',
    store: store, // 使用了Vuex插件Vue.ues(Vuex)并配置了Vue的store配置项 ，有这2个条件就能让vm和vc身上有store,然后在所有组件里就可以使用store身上的store.dispatch 和 store.commit 方法
    render: h => h(App)
})

console.log('vm',vm);