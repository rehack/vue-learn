<template>
    <div>
        <p>当前求和为：{{sum}}</p>
        <p>当前求和放大10倍为：{{bigSum}}</p>
        <p>我在{{school}},学习{{subject}}</p>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">奇数加</button>
        <button @click="incrementWait(n)">延时加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    mounted() {
        console.log(this.$store);
        console.log(mapState({sum:'sum', school:'school',subject:'subject'}));
        console.log(mapState(['sum', 'school', 'subject']));
    },
    methods: {
        /* increment(){
            this.$store.commit('JIA',this.n);
        },
        decrement(){
            this.$store.commit('JIAN',this.n);
        }, */

        // 用mapMutations生成调用$store.commit的方法（方法中会调用commit去联系mutations）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}), // 对象写法
        // ...mapMutations(['JIA','JIAN']) //数组形式


        
        /* incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        } */

        // 用mapActions生成调用$store.dispatch的方法（方法中会调用dispatch去联系actions）
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        // ...mapActions(['jiaOdd','jiaWait']) 
        
    },
    computed:{
        /* sum(){
            return this.$store.state.sum
        },
        school(){
            return this.$store.state.school
        },
        subject(){
            return this.$store.state.subject
        },
        bigSum(){
            return this.$store.getters.bigSum
        } */

        // 使用mapState和mapGetters从Vuex中取数据
        // ...mapState({he:'sum', xuexiao:'school',xueke:'subject'}), // 对象形式
        ...mapState(['sum', 'school', 'subject']), // 如果计算属性名和state名一样，可以用数组形式简写
        ...mapGetters(['bigSum'])
    }

    /**
     * mapState可以把vuex state中的数据映射出来生成计算数据
     * mapState生成的是一个对象，对象中的数据正好是computed里面写的计算属性函数的形式
     * mapGetters可以把vuex getters中的数据映射出来生成计算数据
     */
}
</script>
<style lang="scss" scoped>
button{margin: 0 5px;}
</style>
