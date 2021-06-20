/*
 * @Author: zhaohui
 * @Date: 2021-06-20 13:33:15
 * @LastEditTime: 2021-06-20 14:24:44
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /admin-template/src/service/main.ts
 */
import request from 'utils/request';
export interface Login {
    account: string;
    password: string;
}
export default {
    login(params: Login) {
        return request.post('/login', params);
    }
}