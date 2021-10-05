<template>
    <div>
        <button @click="getStudents">获取学生数据</button>
        <button @click="getCars">获取汽车数据</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {

        }
    },
    methods: {
        getStudents(){
            axios.get('http://localhost:8080/api/students').then(res=>{
                console.log(res.data);
            }).catch(error=>{
                console.log('请求失败',error);
            })
        },
        getCars(){
            axios.get('http://localhost:8080/demo/cars').then(res=>{
                console.log(res.data);
            }).catch(error=>{
                console.log('请求失败',error);
            })
        },
    }
}
</script>
<style lang="scss" scoped>

</style>
