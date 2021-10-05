import Vue from 'vue'
import App from './App'
// 引入插件
import plugins from './plugins'

Vue.config.productionTip = false

// 在创建vm之前应用(使用)插件，全局的
Vue.use(plugins,11,22)  // 还可以向插件中传递参数

new Vue({
    el: '#app',
    render: h => h(App)
})