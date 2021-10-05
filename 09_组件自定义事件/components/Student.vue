<template>
    <div class="student">
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>数字：{{number}}</p>
        <button @click="add">数字增加</button>
        <button @click="sendStudentName(name)">传学生名称给App组件(触发自定义事件)</button>
        <button @click="unbind">解绑自定义事件test</button>
        <button @click="death">销毁当前Student组件的实例对象(vc)</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data () {
        return {
            name: "张三",
            age: 19,
            number: 0
        }
    },
    methods: {
        add(){
            // 组件实例销毁后，add依然能触发，因为@click定义的事件是原生DOM事件
            console.log('add事件被调用了');
            this.number++
        },
        sendStudentName(){
            // 触发Student组件实例对象身上的test事件,并传递参数
            this.$emit('test',this.name,this.age,'haha') // 可以传递多个参数
        },
        unbind(){
            // 解绑自定义事件（解绑一个）
            this.$off('test')

            // 解绑多个自定义事件
            // this.$off(['test','demo'])

            // 解绑全部自定义事件
            // this.$off()
        },
        death(){
            this.$destroy() //当前Student组件的实例对象销毁了

            // 如果组件被销毁了，它身上（实例vc）的自定义事件也就失效了
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
