const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                _M: resolve('/store/modules/M_names'),
                _A: resolve('/store/modules/A_names')
            })
        ]
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@V', resolve('src/views'))
            .set('@C', resolve('src/components'))
            .set('@S', resolve('src/store/modules'))
            .set('@CSS', resolve('css'))
            .set('@PIC', resolve('src/assets'))
    }
}
