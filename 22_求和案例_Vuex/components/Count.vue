<template>
    <div>
        <p>当前求和为：{{$store.state.sum}}</p>
        <p>当前求和放大10倍为：{{$store.getters.bigSum}}</p>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">奇数加</button>
        <button @click="incrementWait">延时加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    mounted() {
        console.log(this.$store);
    },
    methods: {
        increment(){
            // this.$store.dispatch('jia',this.n)
            // 如果不需要action去处理一些逻辑，可以跳过action环节，直接使用commit触发mutation
            this.$store.commit('JIA',this.n);
        },
        decrement(){
            // this.$store.dispatch('jian',this.n)
            this.$store.commit('JIAN',this.n);
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        }
    }
}
</script>
<style lang="scss" scoped>
button{margin: 0 5px;}
</style>
