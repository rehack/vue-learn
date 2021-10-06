<template>
    <div class="main">
        <Category title="游戏">
            <template slot-scope="test">
                <ul>
                    <li v-for="(g,index) in test.games" :key="index">{{g}}</li>
                </ul>
                {{test.msg}}
            </template>
        </Category>
        <Category title="游戏">
            <template v-slot="{games}"> <!-- 解构赋值 -->
                <ol>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <template v-slot="{games}"> 
                <h3 v-for="(g,index) in games" :key="index">{{g}}</h3>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name: 'App',
    components: {Category}
}
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    justify-content: space-around;
}
</style>
