<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h2 v-show="isShow">你好啊</h2>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data () {
        return {
            isShow: true,
        }
    }
}
</script>
<style lang="scss" scoped>
    h2{
        background-color: orange;
        width: 300px;
    }
    /* .v-enter-active{
        animation: test 0.5s linear;
    }
    .v-leave-active{
        animation: test 0.5s linear reverse;
    } */
    .hello-enter-active{
        animation: test 0.5s linear;
    }
    .hello-leave-active{
        animation: test 0.5s linear reverse;
    }
    @keyframes test{
        from {
            transform: translateX(-100%)
        }
        to {
            transform: TranslateX(0);
        }
    }
</style>
