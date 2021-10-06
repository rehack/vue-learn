<template>
    <div class="main">
        <Category title="美食" :dataList="foods">
            <img slot="center" src="https://img0.baidu.com/it/u=92821202,3116728228&fm=26&fmt=auto" alt="">
            <a slot="foot" href="">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="more" slot="foot">
                <a href="">单机游戏</a>
                <a href="">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
            <!-- <template slot="center">
                <div class="more" >
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <p>欢迎观影！</p>
            </template> -->

            <!-- 如果template标签使用了具名插槽(仅限template)，可以使用新语法v-slot: -->
            <template v-slot:foot>
                <div class="more" >
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <p>欢迎观影！</p>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
    components: {Category},
    data () {
        return {
            foods: ['火锅','烧烤','小龙虾','牛排'],
            games: ['CF','王者荣耀','斗地主','狼人杀'],
            films: ['《教父》','《权利游戏》','《战狼》','《速度与激情》'],
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    justify-content: space-around;
}
</style>
