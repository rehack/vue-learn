<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- 父组件向子组件传递一个函数，子组件接受到的props是一个函数，可以调用 -->
            <MyHeader @addTodo="addTodo" />
            <List :todos="todos"/>
            <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearDone="clearDone" />
        </div>
    </div>
</template>

<script>
import pubsub from "pubsub-js"
import MyHeader from "./components/MyHeader";
import List from "./components/List";
import MyFooter from "./components/MyFooter";
export default {
    name: "App",
    components: {
        MyHeader,
        List,
        MyFooter,
    },
    data() {
        return {
            todos: JSON.parse(sessionStorage.getItem('todos')) || []
        }
    },
    mounted() {
        this.$bus.$on('checkTodo',this.checkTodo)
        // this.$bus.$on('deleteTodo',this.deleteTodo)
        // 订阅消息
        this.pubid = pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    methods: {
        // 添加一个todo
        addTodo(todo){
            // console.log(todo);
            this.todos.unshift(todo)
        },
        // 勾选和取消勾选
        checkTodo(todoId){
            this.todos.map(todo=>{
                if(todo.id === todoId){
                    todo.done = !todo.done
                }
            })
        },
        // 删除
        deleteTodo(_,id){
            console.log('id',id);
            // 通过查找数组索引删除
            // const index = this.todos.findIndex(t=>t.id === id)
            // this.todos.splice(index, 1)

            // 通过filter过滤删除
            this.todos = this.todos.filter(t=>t.id !== id)
        },
        // 全选、全部选
        checkAllTodo(done){
            this.todos.forEach(t=>t.done = done)
        },
        // 清除已完成
        clearDone(){
            this.todos = this.todos.filter(t=>!t.done)
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value){
                console.log(value);
                sessionStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    beforeDestroy(){
        this.$bus.$off('checkTodo')
        pubsub.unsubscribe(this.pubid)
    }
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>