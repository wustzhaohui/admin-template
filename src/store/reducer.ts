/*
 * @Author: zhaohui
 * @Date: 2020-11-11 10:57:52
 * @LastEditTime: 2021-06-18 14:55:04
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/store/reducer.ts
 */
import * as constants from './contants';

import { RouterConfigModel } from 'utils';
import { routerConfig } from 'router';

interface stateInterface {
    user: any;
    productionBaseUrl: string;
    childMenu: RouterConfigModel[];
    menuRedirect: {
        dashboard: boolean;
        base: boolean;
        monitor: boolean;
        tools: boolean;
        my: boolean;
    };
    jwt_token: string;
}

// 初始默认的state
const defaultState: stateInterface = {
    user: {},
    productionBaseUrl: process.env.NODE_ENV === 'production' ? '' : '',
    childMenu: [],
    menuRedirect: {
        dashboard: false,
        base: false,
        monitor: false,
        tools: false,
        my: false
    },
    jwt_token: ''
};
let currentMenu: RouterConfigModel[];

const reducer = (state = defaultState, action: any) => {
    // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
    let newState = Object.assign({}, state);
    switch (action.type) {
        case constants.SET_CHILD_MENU:
            findMenu(routerConfig, action.data);
            if (currentMenu && currentMenu.length) {
                newState.childMenu = currentMenu;
            }
            return newState;

        case constants.SET_USER_DATA:
            window.sessionStorage.setItem(
                'userInfo',
                JSON.stringify(action.data)
            );
            return Object.assign({}, newState, { user: action.data });
        case constants.SET_JWT_TOKEN:
            window.localStorage.setItem(
                'jwt_token',
                JSON.stringify(action.data)
            );
            return Object.assign({}, newState, { jwt_token: action.data });
        default:
            return newState;
    }
};

export default reducer;

function findMenu(list: RouterConfigModel[], path: string) {
    for (let i: number = 0; i < list.length; i++) {
        let item: RouterConfigModel = list[i];
        if (item.path === path) {
            if (item.routes && item.routes.length) {
                currentMenu = item.routes;
            }
        } else {
            if (item.routes && item.routes.length) {
                findMenu(item.routes, path);
            }
        }
    }
}
