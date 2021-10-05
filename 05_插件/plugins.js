// 定义一个插件
export default {
    // 插件对象中必须有install方法，vue会自动调用它
    // 第一个参数是Vue类（Vue构造函数），后面的参数可以Vue.use()的时候自定义传入
    install(Vue,m,n) {
        console.log(Vue,m,n);
        console.log('plugin');

        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 全局指令
        Vue.directive('fbind',{
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    m: 1
                }
            }
        })

        // 给Vue原型上添加一个方法，vm和vc都能够使用
        Vue.prototype.hello = () => {
            alert('你好')
        }

    }
}