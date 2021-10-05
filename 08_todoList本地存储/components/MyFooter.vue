<template>
    <div class="todo-footer" v-if="total">
        <label>
            <input type="checkbox" v-model="isAll" />
        </label>
        <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
        <button class="btn btn-danger" @click="handleClearDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: ['todos','checkAllTodo','clearDone'],
    computed: {
        doneTotal(){
            // return this.todos.filter(t=>t.done).length

            // 使用数组reduce统计
            /* return this.todos.reduce(
                (pre,cur)=>{
                    return pre + (cur.done? 1: 0)
                },
                0
            ) */

            return this.todos.reduce((pre,cur)=> pre + (cur.done? 1: 0),0)
        },
        total(){
            return this.todos.length
        },
        isAll:{
            get(){

                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                // 计算属性监听数据改变
                this.checkAllTodo(value)
            }
        }
    },
    methods: {
        // 全选
        /* checkAll(e){
            const state = e.target.checked
            this.checkAllTodo(state)
        }, */
        // 清除已完成
        handleClearDone(){
            this.clearDone()
        }
    },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>