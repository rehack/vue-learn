<template>
    <div>
        <ul>
            <li>习近平将出席《生物多样性公约》 <input type="text"></li>
            <li>2021年国家网络安全宣传周启幕 <input type="text"></li>
            <li>互联网医疗缓解“看病难”  <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "News",
    beforeDestroy(){
        console.log('News组件即将被销毁');
    }
}
</script>
<style lang="scss" scoped>

</style>