/**  time:2018/12/24
 *   作者:农村的师傅
 *   功能:
 */
const path = require('path');
const webpack = require('webpack');
const prerenderSPAPlugin = require('prerender-spa-plugin');
module.exports = {
    // 注意相对 publicPath 的限制，路由的历史模式最好避免使用
    // publicPath: './',
    configureWebpack: {

        plugins: [
            // 全局对象注册，比如zepto，lodash这些
            new prerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/ssrTest'],
            }),
        ],


    }
}
