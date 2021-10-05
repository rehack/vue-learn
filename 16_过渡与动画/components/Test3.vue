<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__tada"
            leave-active-class="animate__backOutUp"
        >
            <h2 v-show="!isShow" key="1">你好啊</h2>
            <h2 v-show="isShow" key="2">Hello!</h2>
        </transition-group>
    </div>
</template>

<script>
// 引入animate动画库
import 'animate.css'
export default {
    name: 'Tes3',
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
        // transition: 0.5s linear;
    }
</style>
