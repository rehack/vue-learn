<template>
    <div>
        <p v-show="info.isFirst">欢迎👏🏻</p>
        <ul v-show="info.users" class="list">
            <li v-for="user in info.users" :key="user.id">
                <a :href="user.html_url" target="_blank">
                    <img :src="user.avatar_url" alt="">
                    <p>{{user.login}}</p>
                </a>
            </li>
        </ul>
        <p v-show="info.loading">加载中...</p>
        <p v-show="info.errMsg">发生错误：{{info.errMsg}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            info: {
                isFirst: true,
                loading: false,
                errMsg: "",
                users: []
            }
        }
    },
    mounted() {
        this.$bus.$on('getUsers',data=>{
            this.info = {...this.info,...data}
        })
    }
}
</script>
<style lang="scss" scoped>
ul{
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 20px;
    overflow: hidden;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li{
        margin: 5px;
        img{
            width: 100px;
            height: 100px;
        }
    }
}
</style>
