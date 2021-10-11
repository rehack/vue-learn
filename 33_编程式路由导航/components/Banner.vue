<template>
    <div class="banner">
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">指定步数go</button>
    </div>
</template>

<script>
export default {
    name: "Banner",
    data () {
        return {

        }
    },
    methods: {
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        go(){
            this.$router.go(2)
        },
    }
}
</script>
<style lang="scss" scoped>
*{margin: 0;
padding: 0;}
.banner {
    padding: 15px 0;
    margin-left: 180px;
    border-bottom: 1px solid #ddd;
    button{margin-right: 5px;}
}
</style>