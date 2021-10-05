<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>

            <!-- 使用v-model数据双向绑定，可以直接修改成功app里的数据，但是不推荐这样做，因为不推荐修改props -->
            <!-- v-model里面最好就不要写props的数据 -->
            <!-- <input type="checkbox" v-model="todoObj.done"/> -->
            <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
            <input 
                type="text" 
                v-show="todoObj.isEdit" 
                :value="todoObj.title" 
                @blur="handleBlur(todoObj,$event)"
                ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
        <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name: 'Item',
    props:['todoObj'],
    mounted() {
        // console.log(this.todoObj)
    },
    methods: {
        // 选择
        handleCheck(todoId){
            // 修改APP组件中的对应的todo对象的done的值 
            // console.log(todoId);
            this.$bus.$emit('checkTodo',todoId)
        },
        // 删除
        handleDelete(todoId){
            if(confirm('确定删除？')){
                // this.$bus.$emit('deleteTodo',todoId)
                pubsub.publish('deleteTodo',todoId)
            }
        },
        // 编辑
        handleEdit(todo){
            // todo.isEdit = true // 这样添加的不能响应式
            // 判断todo是否有isEdit属性 
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                console.log(111);
                todo.isEdit = true
            }else{
                this.$set(todo,'isEdit',true)
            }
            // 点击编辑后让input出现，并获得焦点
            // this.$refs.inputTitle.focus() // 这里并不会获得焦点，因为这里代码执行完了，Vue才去渲染页面，input框才显示出来，先获取焦点再出现input框是不行的
            
            // $nextTick的回调函数会在下一次DOM更新完后执行
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })

        },
        // 失去焦点保存编辑
        handleBlur(todo,e){
            if(!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
            todo.isEdit = false
        }
    },
}
</script>

<style scoped>

/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li .btn {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover{
    background: #f1f1f1;
}
li:hover .btn{
    display: block;
}
li.active {
    background: #f1f1f1;
}
</style>