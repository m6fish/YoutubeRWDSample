const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@V', resolve('src/views'))
            .set('@C', resolve('src/components'))
            .set('@CSS', resolve('css'))
            .set('@PIC', resolve('src/assets'))
    }
}
