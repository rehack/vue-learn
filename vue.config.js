module.exports = {
    // 关闭eslint语法检测
    // lintOnSave: false,
    
    // 开启代理服务器方式一：
    /* devServer:{
        proxy: 'http://localhost:5000'
    } */

    // 开启代理服务器方式一：
    /**
     * /api是请求前缀 （代理服务器判断请求是不是api开头的，如果是就转发代理请求到target，如果不是就不走代理）
     * target 是代理目标的基础路径
     * pathRewrite： 请求代理服务器的地址是/8080/api/xxx 代理服务器然后转发给服务器的请求是 /5000/xxx
     * 
     * 这种可以配置多个代理，可以灵活控制是否走代理请求
     * ajax发送请求时，要走代理就要加上前缀
     */
    devServer:{
        proxy: {
            '/api': { //匹配所有以'/api'开头的请求路径
                target: 'http://localhost:5000',
                pathRewrite: {'^/api': ''}, // 代理服务器向后端服务器转发的时候把/api前缀去掉，不然请求的服务器接口地址会有问题，报404错误
                // ws: true, //用于支持websockt
                // changeOrigin: true // 用于控制服务器收到的请求头中的host值，默认为true, 即伪装host的值为后端服务器的地址(localhost:5000); 如果为false, 后端收到的host值就是真实的代理服务器的地址(localhost:8080)
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/demo': ''}
            }
        }
    }
}