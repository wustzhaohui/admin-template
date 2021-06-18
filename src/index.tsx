/*
 * @Author: zhaohui
 * @Date: 2021-05-12 17:20:54
 * @LastEditTime: 2021-06-18 14:49:06
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /admin-template/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/index.less';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from 'store';
import locale from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from './App';
moment.locale('zh-cn');

ReactDOM.render(
    <ConfigProvider locale={locale}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);

