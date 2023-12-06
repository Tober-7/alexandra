const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.entry('app').clear().add('@/plugins/app/_config/main.js')
    },
})
