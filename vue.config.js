module.exports = {
    // 配置资源文件输出路径
    publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
    devServer: {
        // 设置代理
        proxy: {
            '/': {
                target: 'http://www.wenchuangzhongguo.com',
                changeOrigin: true,
                secure: false
            }
        }
    }
}