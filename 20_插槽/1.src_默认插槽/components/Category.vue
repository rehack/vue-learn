<template>
    <div class="category">
        <h3 class="category-tit">{{title}}分类</h3>
        <!-- 定义一个插槽占位，组件使用者可以往这个位置放入（插入）任意内容 -->
        <!-- <slot>插槽里的默认值，当组件没有传递插槽内容时，使用这里默认内容</slot> -->
        
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title','dataList'],
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
    ul{
        list-style: none;
        color: #444;
        padding: 5px;
        line-height: 30px;
    }
}
</style>
