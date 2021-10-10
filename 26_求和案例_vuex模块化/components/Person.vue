<template>
    <div>
        <h3>人员列表</h3>
        <p style="color:red">Count组件的求和为：{{sum}}</p>
        <p style="color:red">列表中第一个人的名字是：{{firstPersonName}}</p>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addQuotation">随机添加语录</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:"Person",
    data () {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add(){
            const personObj = {
                id: nanoid(),
                name: this.name
            }
            // console.log(personObj);
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name = ''
        },
        addWang() {
            const personObj = {
                id: nanoid(),
                name: this.name
            }
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name = ''
        },
        addQuotation(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
