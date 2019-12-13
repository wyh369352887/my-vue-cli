module.exports = {
    publicPath: './',
    parallel: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://uat-ngbx.55hudong.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}