<template>
    <div class="main">
        <Category title="美食" :dataList="foods">
            <img src="https://img0.baidu.com/it/u=92821202,3116728228&fm=26&fmt=auto" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
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
