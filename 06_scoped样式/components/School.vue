<template>
    <div class="demo">
        <p>学校名称；{{name}}</p>
        <p>学校地址：{{address}}</p>
    </div>
</template>

<script>
export default {
    name: "School",
    data () {
        return {
            name: "北京大学-欢迎你",
            address: "北京市"
        }
    }
}
</script>
<style>
    .demo {
        background-color: skyblue;
    }
</style>
