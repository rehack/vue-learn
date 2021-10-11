<template>
    <div>
        <h4>Home组件内容</h4>
        <router-link active-class="active" class="nav" to="/home/news">News</router-link>
        <router-link active-class="active" class="nav" to="/home/message">Message</router-link>
        
        <!-- keep-alive让组件缓存起来(保持挂载状态)，切换路由的时候不会被销毁，include(值是组件名)可以指定哪个数组可以被缓存 -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
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
