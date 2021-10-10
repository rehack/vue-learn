<template>
    <div>Home组件内容</div>
</template>

<script>
export default {
    name: "Home",
    mounted() {
        console.log('Home组件挂载完毕');
    },
    beforeDestroy() {
        console.log('Home组件将要被销毁');
    },
}
</script>
<style lang="scss" scoped>

</style>
