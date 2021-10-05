<template>
    <div>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default {
    name: "Student",

    data () {
        return {
            name: "张三",
            age: 19
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
