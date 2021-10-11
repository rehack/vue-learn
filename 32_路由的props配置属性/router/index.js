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
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detal组件，用于给路由组件传递固定是props数据
                            /* props: {
                                x: 1,
                                y: 2
                            }, */
                            // props的第二种写法，值为对象,若为true,就会把该路由组件收到的所有params(query不行)参数，以props的形式传给Detal组件，用于简化路由组件接收params参数的写法($route.params.xxx)
                            props: true,

                            // props的第三种写法，值为回调函数，该函数返回的对象中每一组key-value都会通过props传给Detal组件,除了能把query和params参数传到props，还能放入额外的数据
                            // props: ()=>{}
                            /* props($route){
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    x: 1,
                                    y: 2
                                }
                            }, */

                            /* props({query:{id,title}}) { //连续解构赋值
                                return {
                                    id,
                                    title
                                }
                            } */
                        }
                    ]
                }
            ]
        }
    ]
})