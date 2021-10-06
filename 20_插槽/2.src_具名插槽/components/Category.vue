<template>
    <div class="category">
        <h3 class="category-tit">{{title}}分类</h3>
        
        <!-- 如果需要使用多个插槽就要用具名插槽，给每个插槽取个名字 ,使用的时候使用slot属性指定需要使用哪个插槽-->
        <slot name="center"></slot>
        <slot name="foot"></slot>
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
    .more{
        margin: 0 auto;
        text-align: center;
    }
    a{
        text-align: center;
        margin: 5px;
    }
    ul{
        list-style: none;
        color: #444;
        padding: 5px;
        line-height: 30px;
    }
}
</style>
