<template>
    <div class="demo">
        <p>{{name}}</p>
        <p class="red">{{age}}</p>
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
    /* 此样式会覆盖掉School组件中的demo样式，因为Student组件在School组件之后引入的 */
    /* 在style标签中加入scoped属性，可以让样式只在当前组件生效 */
    // sass-loader支持webpack4的版本是10版本，11版本及以上要webpack5,sass的版本都支持webpack4和weboack5
    .demo {
        background-color: pink;
        .red{
            color: red;
        }
    }
</style>
