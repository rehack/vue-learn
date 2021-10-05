import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

// 定义全局事件总线
// const Com = Vue.extend({})
// const vc = new Com()
// console.log(vc);
// Vue.prototype.$bus = vc
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this // 安装全局事件总线
        console.log(this);
        console.log(Vue.prototype);
        console.log(this.$bus);
    }
})