<template>
    <div>
        <p>当前求和为：{{sum}}</p>
        <p>当前求和放大10倍为：{{bigSum}}</p>
        <p>我在{{school}},学习{{subject}}</p>
        <p style="color:red">Person组件的总人数是 {{personList.length}}</p>
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
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    mounted() {
        console.log(this.$store.state);
        // console.log(mapState(['countAbout','personAbout']));
    },
    computed:{
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',['bigSum'])
    },
    methods: {
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        
    }
}
</script>
<style lang="scss" scoped>
button{margin: 0 5px;}
</style>
