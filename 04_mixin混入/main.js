import Vue from 'vue'

import App from './App'
// 导入混入对象
import {mixin1 , mixin2} from './mixin'
// 全局混入
Vue.mixin(mixin1)
Vue.mixin(mixin2)


Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})