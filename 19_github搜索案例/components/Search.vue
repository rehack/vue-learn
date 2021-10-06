<template>
    <div>
        <h3>Search Github Users</h3> 
        <input ref="ipt" type="text">
        <button @click="search" :disabled="loading">搜索</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            loading: false,
        }
    },
    methods: {
        search() {
            const keyword = this.$refs.ipt.value.trim()
            if(!keyword) return alert('查询不能为空')

            this.$bus.$emit('getUsers',{isFirst:false,loading:true,errMsg:'',users:[]})
            axios.get('https://api.github.com/search/users',{
                params:{q:keyword}
            }).then(res=>{
                console.log(res);
                this.$bus.$emit('getUsers',{loading:false,errMsg:'',users:res.data.items})
                this.$refs.ipt.value = ''
            }).catch(e=>{
                this.$bus.$emit('getUsers',{loading:false,errMsg:e.message,users:[]})
            })
        }
    }
}
</script>
<style lang="scss" scoped>
button{
    margin-left: 10px;
}
</style>
