// 混入对象是用于 复用组件的配置选项，data，mounted，methods等都可以抽离到mixin，在不同组件中进行复用
// 一个混入对象可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项

// 定义并导出混入对象
export const mixin1 = {
    data() {
        return {
            x: 1
        }
    },
    mounted() {
        console.log('mixin')
    },
    methods: {
        showName(){
            alert(this.name)
        }
    }
}


export const mixin2 = {
    data() {
        return {
            y: 22
        }
    }
}