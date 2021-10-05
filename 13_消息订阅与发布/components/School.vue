<template>
    <div class="school">
        <p>学校名称；{{name}}</p>
        <p>学校地址：{{address}}</p>
    </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name: "School",
    data () {
        return {
            name: "北京大学",
            address: "北京市"
        }
    },
    mounted() {
        // 订阅消息,subscribe有2个参数，
        //  一个是消息的名称，发布消息的时候，要通过这个消息名称发布
        // 第二个参数是回调函数，当发布消息的时候会调用此函数
        this.pubid = pubsub.subscribe('msgName',(msgname,data) => {
            console.log(data);
        })
        // 返回一个消息id,取消的时候要用这个id
        console.log(this.pubid); // uid_0
    },
    beforeDestroy(){
        // 取消订阅
        pubsub.unsubscribe(this.pubid)

    }
}
</script>
<style>
    .school {
        background-color: skyblue;
        padding:5px;
    }
</style>
