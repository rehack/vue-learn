import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced: true, // 开启vuex模块的命名空间
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=zha&code=json').then(res=>{
                // console.log(res.data);
                context.commit('ADD_PERSON',{id:nanoid(),name:res.data.content})
            })
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
    }
}