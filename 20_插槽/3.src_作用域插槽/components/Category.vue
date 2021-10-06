<template>
    <div class="category">
        <h3 class="category-tit">{{title}}分类</h3>
        <!-- 作用域插槽 -->
        <!-- 数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定 -->
        <!-- 作用域插槽也可以设置具名，也可以设置插槽默认值 -->
        <slot :games="games" msg="hello"></slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title','dataList'],

    data () {
        return {
            games: ['CF','王者荣耀','斗地主','狼人杀']
        }
    },
    mounted() {
        console.log(this);
    }
}
</script>
<style lang="scss" scoped>
.category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    .category-tit{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    .more{
        margin: 0 auto;
        text-align: center;
    }
    a{
        text-align: center;
        margin: 5px;
    }
    ul{
        color: #444;
        line-height: 30px;
    }
}
</style>
