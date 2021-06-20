/*
 * @Author: zhaohui
 * @Date: 2020-11-06 18:48:43
 * @LastEditTime: 2021-06-20 14:24:16
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/utils/request.ts
 */
import axios from 'axios';
import { notification } from 'antd';
import store from 'store';

const request: any = axios.create({
    baseURL: '/admin'
});

request.interceptors.request.use(
    function(config: any) {
        if (store.getState().jwt_token) {
            let jwt_token = store.getState().jwt_token;
            config.headers['jwt-token'] = jwt_token;
        }
        return config;
    },
    function(error: any) {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    function(response: any) {
        return response.data;
    },
    function(error: any) {
        return Promise.reject(error);
    }
);

export default request;
