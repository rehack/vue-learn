<template>
    <div class="app">
        <h2>{{msg}},{{studentName}}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 自定义事件的第一种写法： 通过父组件给子组件绑定一个自定义事件test实现：子组件给父组件传递数据 -->
        <!-- <Student v-on:test="getStudentName"/> -->
        <!-- <Student @test.once="getStudentName"/> --> <!-- 只触发一次事件 -->


        <!-- 自定义事件的第二种写法： 通过父组件给子组件绑定一个自定义事件test实现：子组件给父组件传递数据 -->
        <!-- 通过ref拿到Student实例对象，通过实例对象的$on方法绑定一个自定义事件test -->
        <Student ref="student" @click="show" /> <!-- 在组件上不加native修饰事件会被当做自定义事件，直接点击没有效果，只能通过vc.$emit触发 -->
        <Student ref="student" @click.native="show" /> <!-- 加上native修饰就可以绑定为原生事件，这个原生事件加在Student组件的最外层HTML标签上，所有组件模板中不能有2个根标签，不然原生事件不知道加在哪个上面-->
    </div>
</template>

<script>
    import School from "./components/School"
    import Student from "./components/Student"
    export default {
        name: "App",
        data() {
            return {
                msg: '你好啊',
                studentName: ''
            }
        },
        components: {
            Student,School
        },
        methods: {
            getSchoolName(name){
                console.log(name);
            },
            getStudentName(name,...params){
                console.log(name, params);
                this.studentName = name
            },
            show(){
                alert("hahaha")
            }
        },
        mounted() {
            // 绑定自定义事件
            // this.$refs.student.$on('test',this.getStudentName)

            // 3秒之后绑定自定义事件，3秒后点击才能触发这个自定义事件，ref方式更灵活
            setTimeout(()=>{
                // 为Student组件实例绑定一个自定义事件
                this.$refs.student.$on('test',this.getStudentName)
                // this.$refs.student.$once('test',this.getStudentName) //只能触发一次

                console.log(this);
                // console.log(this.$refs.student.$on);
                // console.log(this.getStudentName);  
                this.$refs.student.$on('test',function(){
                    // 注意这里的this指向 Student实例对象，因为是Student组件实例对象触发的test事件(vc.$emit('test'))，那么test事件的回调函数中的this就是Student组件实例对象
                    console.log(this)
                })
                this.$refs.student.$on('test',()=>{
                    // 此回调函数中的this本应该是指向Student组件实例对象，但是箭头函数没有自己的this，所以这里的this指向App组件实例对象
                    console.log(this)
                })
            },3000)
        },
    }
</script>

<style>
.app{
    background-color: #eee;
    padding:10px;
}
</style>