module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //publicPath: './' // <----这里就是会修改webpack的outPath.publicPath

    devServer:{
        open:true,
        hot:true,
        port:8080
    }
}