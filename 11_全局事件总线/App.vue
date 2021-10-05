<template>
    <div class="app">
        <h2>{{msg}}</h2>
        <School/>
        <Student/>
    </div>
</template>

<script>
    import School from "./components/School"
    import Student from "./components/Student"
    export default {
        name: "App",
        data() {
            return {
                msg: '你好啊'
            }
        },
        components: {
            Student,School
        }
    }
</script>

<style>
.app{
    background-color: #eee;
    padding:10px;
}
</style>