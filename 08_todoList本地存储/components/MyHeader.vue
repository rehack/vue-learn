<template>
    <div>
        <div class="todo-header">
            <input @keyup.enter="add" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'MyHeader',
    props: ['addTodo'],
    mounted() {
        // console.log(this.addTodo)
    },
    methods: {
        add(e) {
            let value = e.target.value.trim()
            if(!value) return alert('不能为空')
            // 将输入的数据整理成一个todo对象
            const todoObj = {
                id: nanoid(),
                title: value,
                done: false
            }
            // console.log(todoObj);
            // 子组件调用父组件传递过来的函数，通过函数参数把数据传给父组件
            // this.$emit('addTodo',todoObj)
            this.addTodo(todoObj)
            e.target.value = ''
        }
    },
}
</script>

<style scoped>
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
  
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>