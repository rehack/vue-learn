<template>
    <div>
        <p @click="showName">{{name}}</p>
        <p>{{age}}</p>
    </div>
</template>

<script>
// 导入混入对象
import {mixin1,mixin2} from '../mixin'
export default {
    name: "Student",

    data () {
        return {
            name: "张三",
            age: 19
        }
    },
    // 局部使用混入对象
    mixins: [mixin1,mixin2]
}
</script>
<style lang="scss" scoped>

</style>
