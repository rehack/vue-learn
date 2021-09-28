<template>
    <div>
        <h2>{{msg}}</h2>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{myAge}}</p>
        <p>{{gender}}</p>
        <button @click="updateAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    // props: ['name','age','gender'], // props 简单声明接收父组件传递过来的数据，接收到的数据会放到vc实例对象上，可以在模板中通过插值语法直接使用

    // 对父组件传递的数据类型进行限制，如果传递的数据类型不是这里接收所指定的类型，浏览器控制台会报错
    /* props: {
        name: String,
        gender: String,
        age: Number
    }, */

    // 对父组件所传数据的类型和数据必需性进行约束，还可以指定默认值（required为false的情况下）
    props: {
        name: {
            type: String,
            required: true // 指定父组件必须传递name数据，否则控制台会报错Missing required prop: "name"
        },
        age: {
            type: Number,
            default: 30 // 如果没有限制必须传递，可以设置一个default默认值
        },
        gender: {
            type: String,
            required: true //
        }
    },

    data () {
        console.log(this);
        return {
            msg: "你好呀",
            myAge: this.age // 取props中的数据，props的优先级高于data,在data中的数据之前被放到vc，所以在data函数中可以拿到props数据
        }
    },
    methods: {
        updateAge() {
            this.age ++ // props数据是只读的，不允许被直接修改，页面能修改成功，但是会报错

            this.myAge ++ // 通过中转数据进行修改，复制一份props数据到data中，然后修改data的数据
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
