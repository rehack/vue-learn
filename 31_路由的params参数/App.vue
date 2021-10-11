<template>
    <div>
        <Banner/>
        <div class="main">
            <Menus/>
            <div class="body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import Menus from './components/Menus'
export default {
    name: 'App',
    components: {Banner,Menus}
}
</script>
<style>
    .main{
        display: flex;
    }
    .body{
        margin-left: 20px;
    }
</style>