<template>
    <div>
        <!-- 接收当前路由跳转的query参数 -->
        {{$route.query.id}}: {{$route.query.title}}
    </div>
</template>

<script>
export default {
    name: "Detail",
}
</script>