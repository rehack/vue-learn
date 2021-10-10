/**
 * 该文件用于创建Vuex中最核心的store
 */

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

import countOptions from './modules/count'
import personOptions from './modules/person'

// 使用Vuex (Vuex是一个插件)
Vue.use(Vuex) //必须要在创建store实例之前




// 求和功能相关的配置
/* const countOptions = {
    namespaced: true, // 开启vuex模块的命名空间
    actions: {
        jiaOdd({commit,state},value){
            if(state.sum % 2){
                commit('JIA',value);
            }
        },
        jiaWait({commit},value){
            setTimeout(()=>{
                commit('JIA',value);
            },1000)
        }
    },
    mutations:{
        JIA(state,value){
            console.log(state,value);
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        }
    },
    state:{
        sum: 0,
        school: '北京大学',
        subject: '前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }

}

// Person组件相关的配置
const personOptions = {
    namespaced: true, // 开启vuex模块的命名空间
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList: [
            {id: '001', name: 'John'},
            {id: '002', name: 'Rose'},
            {id: '003', name: 'Jace'},
            {id: '004', name: 'hanke'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
} */



// 创建并暴露store实例
export default new Vuex.Store({
    // vuex模块化（store分类）
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})