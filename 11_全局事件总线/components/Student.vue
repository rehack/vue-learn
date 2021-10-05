<template>
    <div class="student">
        <p>{{name}}</p>
        <p>{{age}}</p>
        <button @click="send">通过全局事件总线向兄弟组件School传数据</button>
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
    },
    methods: {
        send() {
            // 触发全局事件总线身上的test事件，并传参数
            this.$bus.$emit('test',' 欢迎你')
        }
    },
}
</script>
<style>
    .student {
        background-color: pink;
        padding:5px;
        margin-top: 20px;
    }
</style>
