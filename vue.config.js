module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //publicPath: './' // <----这里就是会修改webpack的outPath.publicPath

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },

    devServer:{
        open:false,           // 自动启动浏览器
        hot:true,             // 模块热更新
        compress: true,       // 运行编译压缩
        port:8080             // 端口
    }
}