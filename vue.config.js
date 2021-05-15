process.env.THEME = 'prism-coy.css',
    module.exports = {
        configureWebpack: {
            // provide the app's title in webpack's name field, so that
            // it can be accessed in index.html to inject the correct title.
            // entry: {
            //     app: ["babel-polyfill", "./src/main.js"]
            // },

            resolve: {
                extensions: ['.js', '.vue', '.json'],

                alias: {
                    'vue$': 'vue/dist/vue.esm.js',

                    // '@': resolve('src'),

                    // 'theme': `./standard.styl`,

                    'theme': `./${process.env.THEME}`,

                }
            },
            devServer: {
                hot: true,
                open: true,
                overlay: {
                    warnings: false,
                    errors: true
                },
                proxy: {
                    '/api': {
                        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                        target: 'http://81.71.138.29:8089',
                        // 允许跨域
                        changeOrigin: true,
                        ws: true,
                        pathRewrite: {
                            '^/api': ''
                        }
                    }
                }
            }
        }
    }