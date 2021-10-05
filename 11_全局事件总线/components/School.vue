<template>
    <div class="school">
        <p>学校名称；{{name}}</p>
        <p>学校地址：{{address}}</p>
    </div>
</template>

<script>
export default {
    name: "School",
    data () {
        return {
            name: "北京大学",
            address: "北京市"
        }
    },
    mounted() {
        // 给全局事件总线组件绑定自定义事件
        this.$bus.$on('test',(p) => {
            console.log(p);
            this.name += p
        })
    }
}
</script>
<style>
    .school {
        background-color: skyblue;
        padding:5px;
    }
</style>
