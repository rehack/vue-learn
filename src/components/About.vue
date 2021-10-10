<template>
    <div>About组件内容</div>
</template>

<script>
export default {
    name: "About",
    mounted() {
        console.log('About组件挂载完毕');
    },
    beforeDestroy() {
        console.log('About组件即将被销毁');
    },
}
</script>
<style lang="scss" scoped>

</style>
