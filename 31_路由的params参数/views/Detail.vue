<template>
    <div>
        <!-- 接收当前路由跳转的params参数 -->
        {{$route.params.id}}: {{$route.params.title}}
    </div>
</template>

<script>
export default {
    name: "Detail",
    mounted () {
        console.log(this.$route);
    }
}
</script>