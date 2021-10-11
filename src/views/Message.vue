<template>
    <div>
        <ul>
            <li v-for="i in messageList" :key="i.id">
                <!-- 路由跳转并携带params参数 ,to的字符串写法-->
                <!-- <router-link :to="`/home/message/detail/${i.id}/${i.title}`">{{i.title}}</router-link> -->

                <!-- 路由跳转并携带params参数 ,to的对象写法-->
                <router-link class="msg-item" :to="{
                    name: 'xiangqing', // param参数的对象写法 必须使用使用命名路由跳转,不能使用path
                    params: {
                        id: i.id,
                        title: i.title,
                    }
                }">
                    {{i.title}}
                </router-link>
                <button @click="pushShow(i)">push查看</button>
                <button @click="replaceShow(i)">replace查看</button>
            </li>
        </ul>
        <div class="msg-detail">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data () {
        return {
            messageList: [
                {id:'001',title:'全国疫情高风险地区清零'},
                {id:'002',title:'2021年诺贝尔经济学奖揭晓'},
                {id:'003',title:'广电总局力挺爱国爱港艺人'}
            ]
        }
    },
    methods: {
        pushShow(i){
            this.$router.push({
                name: 'xiangqing',
                params: {
                    id: i.id,
                    title: i.title,
                }
            })
        },
        replaceShow(i){
            this.$router.replace({
                name: 'xiangqing',
                params: {
                    id: i.id,
                    title: i.title,
                }
            })
        }
    },
    beforeDestroy(){
        console.log('Message组件即将被销毁');
    }
}
</script>
<style scoped>
.msg-item{
    display: inline-block;
    width: 200px;
    margin-right: 10px;
}
</style>