module.exports = {
    devServer: {
        proxyTable: {
            '/api': {
                target: 'https://47.113.218.236:6667', //服务器的地址
                secure: true,//如果是https请设置为true
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'http://47.113.218.236:6667'
                }
            }
        },
    }
}