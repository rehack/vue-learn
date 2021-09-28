<template>
    <div>
        <h2 v-text="msg" ref="h2"></h2>
        <button ref="btn" @click="show">点击</button>
        <Student ref="sch"></Student>
    </div>
</template>

<script>
    import Student from "./components/Student"
    export default {
        name: "App",
        components: {
            Student,
        },
        data() {
            return {
                msg: 'Hello, World'
            }
        },
        methods: {
            show(){
                console.log(this.$refs)
                console.log(this.$refs.h2) // h2真实DOM
                console.log(this.$refs.sch) // 组件上的ref是指向的组件的实例对象(vc)
                this.$refs.h2.style.color = 'red'
            }
        }
    }
</script>

<style>

</style>