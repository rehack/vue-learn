<template>
    <div>
        <!-- 接收当前路由跳转的params参数 -->
        <!-- {{$route.params.id}}: {{$route.params.title}} -->
        {{id}}: {{title}}
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: ['id', 'title'],
    mounted () {
        console.log(this.$route);
    }
}
</script>