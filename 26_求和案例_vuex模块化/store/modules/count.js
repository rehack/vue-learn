export default {
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