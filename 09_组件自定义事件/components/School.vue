<template>
    <div class="school">
        <p>学校名称；{{name}}</p>
        <p>学校地址：{{address}}</p>
        <button @click="sendSchoolName(name)">传学校名称给App组件</button>
    </div>
</template>

<script>
export default {
    name: "School",
    props: ['getSchoolName'],
    data () {
        return {
            name: "北京大学-欢迎你",
            address: "北京市"
        }
    },
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>
<style>
    .school {
        background-color: skyblue;
        padding:5px;
    }
</style>
