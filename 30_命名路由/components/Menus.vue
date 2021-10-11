<template>
    <div class="menus">
        <router-link class="menu" active-class="active" :to="{name: 'guanyu'}">About</router-link>
        <router-link class="menu" active-class="active" to="/home">Home</router-link>
    </div>
</template>

<script>
export default {
    name: "Menus",
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.menus {
    width: 180px;
    height: 300px;
    border: 1px solid #ddd;
    .menu{
        height: 50px;
        display:block;
        color: #666;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        background-color: #f3f3f3;
        border-bottom: 1px solid #ccc;
        &.active{
            background-color: skyblue;
            color: #000;
        }
    }
}
</style>
