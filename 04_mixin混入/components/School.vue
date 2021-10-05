<template>
    <div>
        <p @click="showName">学校名称；{{name}}</p>
        <p>学校地址：{{address}}</p>
    </div>
</template>

<script>
//导入混合对象
import {mixin1} from "../mixin"
export default {
    name: "School",
    data () {
        return {
            name: "北京大学",
            address: "北京市"
        }
    },
    mixins: [mixin1]
}
</script>
<style lang="scss" scoped>

</style>
