/*
 * @Author: zhaohui
 * @Date: 2021-06-18 14:38:27
 * @LastEditTime: 2021-06-19 19:00:29
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/router/index.ts
 */
import React from 'react';
import { RouterConfigModel } from 'utils';
// 登录
const Login = React.lazy(() => import('pages/login'));
// 主页
const Main = React.lazy(() => import('pages/main'));
// 子路由
const Child1 = React.lazy(() => import('pages/main/child'));
export const routerConfig: RouterConfigModel[] = [
    {
        name: '登录',
        component: Login,
        path: '/login',
        exact: true,
        hidden: false,
    },
    {
        name: '主页面',
        component: Main,
        path: '/main',
        exact: false,
        hidden: false,
        routes: [
            {
                name: '管理',
                component: Child1,
                exact: true,
                path: '/main/child',
                routes: [
                    {
                        name: '管理',
                        component: Child1,
                        exact: true,
                        path: '/main/child/child',
                    },
                ],
            },
        ],
    },
];
