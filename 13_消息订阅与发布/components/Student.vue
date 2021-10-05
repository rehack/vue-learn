<template>
    <div class="student">
        <p>{{name}}</p>
        <p>{{age}}</p>
        <button @click="send">通过全局事件总线向兄弟组件School传数据</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
            // 发布消息
            pubsub.publish('msgName',this.name)
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
