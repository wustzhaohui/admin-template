/*
 * @Author: zhaohui
 * @Date: 2020-11-05 14:06:19
 * @LastEditTime: 2021-06-18 15:17:59
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://10.249.23.53',
            changeOrigin: true,
            secure: false
        })
    );
};
