<template>
    <div>
        <h4>Home组件内容</h4>
        <router-link active-class="active" class="nav" to="/home/news">News</router-link>
        <router-link active-class="active" class="nav" to="/home/message">Message</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    name: "Home",
}
</script>
<style lang="scss" scoped>
.nav {
    display: inline-block;
    text-decoration: none;
    border: 1px solid #f3f3f3;
    background: #F1F1F1;
    padding: 5px;
    border-radius: 5px;
    margin: 15px 2px;
    &.active{
        background-color: skyblue;
    }
}
</style>
