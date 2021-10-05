<template>
    <div>
        <p>学校名称；{{name| mySlice}}</p>
        <p>学校地址：{{address}}</p>
        <button @click="hello">使用插件</button>
    </div>
</template>

<script>
export default {
    name: "School",
    data () {
        return {
            name: "北京大学-欢迎你",
            address: "北京市"
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
