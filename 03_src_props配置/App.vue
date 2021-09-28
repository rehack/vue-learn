<template>
    <div>
        <!-- 父组件向子组件传递数据，在子组件标签上通过属性传递 -->
        <Student name="john" gender="male" :age="18"/> <!-- 属性加了v-bind 里面的值就不是一个字符串了，是一个表达式 -->
        <Student name="john" gender="male"/>
    </div>
</template>

<script>
    import Student from "./components/Student"
    export default {
        name: "App",
        components: {
            Student,
        },
    }
</script>

<style>

</style>