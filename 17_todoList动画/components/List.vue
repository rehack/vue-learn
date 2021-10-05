<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <Item v-for="todo in todos" :key="todo.id" :todoObj="todo"/>
        </transition-group>
    </ul>
</template>

<script>
import Item from "./Item";
export default {
    name: "List",
    props:['todos'],
    components: { Item },
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
.todo-enter-active{
    animation: test 0.5s linear;
}
.todo-leave-active{
    animation: test 0.5s linear reverse;
}
@keyframes test{
    from {
        transform: translateX(100%)
    }
    to {
        transform: TranslateX(0);
    }
}
</style>