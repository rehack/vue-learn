/**
 * 该文件用于创建Vuex中最核心的store
 */

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 使用Vuex (Vuex是一个插件)
Vue.use(Vuex) //必须要在创建store实例之前




/**
 * 组成Vuex的三个重要的部分：actions,mutations,state ,这三个都受store管理
 * actions,mutations,state都是一个对象
 */
// 定义actions, actions用于响应组件中的动作
const actions = {
    jia(context,value){
        // context是上下文 是一个精简的store对象，value是组件中dispatch这个action时传的数据
        console.log(context,value); 
        context.commit('JIA',value); //action收到数据后，继续交给JIA这个mutation去处理
    },
    jian(context,value){
        context.commit('JIAN',value);
    },
    jiaOdd({commit,state},value){
        if(state.sum % 2){
            commit('JIA',value);
        }
    },
    jiaWait({commit},value){
        setTimeout(()=>{
            commit('JIA',value);
        },1000)
    },
}

// 准备mutations ，用于操作数据(state)的
const mutations = {
    // 第一个参数是state数据对象
    JIA(state,value){
        console.log(state,value);
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}


// 准备state ，用于存储共享数据的
const state = {
    sum: 0
}

// 准备getters 用于将state中的数据进行加工(state的计算属性)
const getters = {
    bigSum(state){
        return state.sum*10
    }
}







// 创建store
/* const store = new Vuex.Store({
    actions,
    mutations,
    state
})

export default store */

// 创建并暴露store实例
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})