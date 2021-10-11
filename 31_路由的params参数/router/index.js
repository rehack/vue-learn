// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import Detail from '../views/Detail'

// 创建一个路由器实例对象
export default new VueRouter({
    routes: [
        {
            name: 'guanyu', //给路由命名
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing', //给路由命名
                            path: 'detail/:id/:title', // 使用占位符声明接收params参数
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})