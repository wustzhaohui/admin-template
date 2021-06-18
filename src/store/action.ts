/*
 * @Author: zhaohui
 * @Date: 2020-11-11 10:58:18
 * @LastEditTime: 2020-12-18 19:46:04
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /nxingyuan/src/store/action.ts
 */
import * as constants from './contants';

export const getMenu = (data: string) => ({
    type: constants.SET_CHILD_MENU,
    data
});
export const getData: object = (data: any) => ({
    type: constants.SET_USER_DATA,
    data
});
