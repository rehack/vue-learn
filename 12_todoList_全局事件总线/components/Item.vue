<template>
    <li >
        <label>
            <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>

            <!-- 使用v-model数据双向绑定，可以直接修改成功app里的数据，但是不推荐这样做，因为不推荐修改props -->
            <!-- v-model里面最好就不要写props的数据 -->
            <!-- <input type="checkbox" v-model="todoObj.done"/> -->
            <span>{{todoObj.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    </li>
</template>

<script>
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
                this.$bus.$emit('deleteTodo',todoId)
            }
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