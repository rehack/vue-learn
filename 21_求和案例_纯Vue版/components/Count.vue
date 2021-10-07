<template>
    <div>
        <p>当前求和为：{{sum}}</p>
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
            sum: 0,
            n: 1
        }
    },
    methods: {
        increment(){
            this.sum += this.n
        },
        decrement(){
            this.sum -= this.n
        },
        incrementOdd(){
            if(this.sum % 2 !== 0){
                this.sum += this.n
            }
        },
        incrementWait(){
            setTimeout(()=>{
                this.sum += this.n
            },1000)
        }
    }
}
</script>
<style lang="scss" scoped>
button{margin: 0 5px;}
</style>
