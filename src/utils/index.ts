/*
 * @Author: zhaohui
 * @Date: 2021-06-18 14:45:54
 * @LastEditTime: 2021-06-18 14:51:23
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /admin-template/src/utils/index.ts
 */
export interface RouterConfigModel {
    path?: string;
    component?: any;
    auth?: boolean;
    name?: string;
    icon?: string;
    exact?: boolean;
    hidden?: boolean;
    routes?: Array<RouterConfigModel>;
}
