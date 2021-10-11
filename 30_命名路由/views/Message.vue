<template>
    <div>
        <ul>
            <li v-for="i in messageList" :key="i.id">
                <!-- 路由跳转并携带query参数 ,to的字符串写法-->
                <!-- <router-link :to="`/home/message/detail?id=${i.id}&title=${i.title}`">{{i.title}}</router-link> -->

                <!-- 路由跳转并携带query参数 ,to的对象写法-->
                <router-link :to="{
                    //path: '/home/message/detail',
                    name: 'xiangqing',
                    query: {
                        id: i.id,
                        title: i.title,
                    }
                }">
                    {{i.title}}
                </router-link>

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

    }
}
</script>
<style lang="scss" scoped>

</style>