module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
        config.optimization.splitChunks({
            chunks: 'all', // 仅提取按需载入的module
            maxAsyncRequests: 10, // 最大按需载入chunks提取数,
            cacheGroups: { // 缓存组配置，默认有vendors和default
                'core-js': {
                    name: 'core-js',
                    test: /[\\/]node_modules[\\/]core-js[\\/]/,
                    priority: 10
                },
                'element-ui': {
                    name: 'element-ui',
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    priority: 5
                }
            }
        })
        // config
        //     .plugin('webpack-bundle-analyzer')
        //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        // 热更新配置
        config.resolve
            .symlinks(true);
    },
    css: {
        extract: true
    },
    // pages: {
    //     index: {
    //       entry: 'src/main.js',
    //       template: 'public/index.html',
    //       filename: 'index.html',
    //       title: 'sass-admin',
    //       chunks: ['vendors', 'element-ui', 'index']
    //     }
    // }
    lintOnSave : false,
    devServer: {
        // proxy: {

        // },
       
    }
}