/*
 * @Author: zhaohui
 * @Date: 2021-01-19 11:28:10
 * @LastEditTime: 2021-06-18 15:20:52
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/App.tsx
 */
import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { routerConfig } from 'router';
import { SET_USER_DATA, SET_JWT_TOKEN } from 'store/contants';
import store from 'store';

import history from 'router/history';
import { RouterConfigModel } from 'utils';
import { Skeleton } from 'antd';
type MyState = {
    routerConfig: RouterConfigModel[];
    backUrl: string;
};
export default class App extends Component<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            routerConfig: [],
            backUrl: ''
        };
    }
    async componentDidMount() {
        if (!store.getState().user || !store.getState().user.uid) {
            try {
                await this.getLogin();
                this.setRouter();
            } catch (error) {
                this.setRouter();
            }
        } else {
            this.setRouter();
        }
    }
    setRouter = () => {
        this.setState(
            {
                routerConfig
            },
            () => {
                if (
                    store.getState().user &&
                    store.getState().user.uid &&
                    window.location.pathname.indexOf('/login') > -1
                ) {
                    history.replace('/main/base/list');
                }
            }
        );
    };
    getLogin = () => {
        return new Promise(
            async (resolve, reject): Promise<void> => {
                try {
                    store.dispatch({
                        type: SET_JWT_TOKEN,
                        data: JSON.parse(localStorage.jwt_token)
                    });
                    // let { data } = await api_sys.user();
                    store.dispatch({
                        type: SET_USER_DATA,
                        data: {}
                    });
                    resolve(true);
                } catch (error) {
                    reject();
                    console.log(error);
                }
            }
        );
    };
    render() {
        return (
            <Suspense fallback={<Skeleton loading={true} />}>
                <Router history={history}>
                    <Switch>
                        {this.state.routerConfig.map(
                            (item: RouterConfigModel, index: number) => {
                                return <Route {...item} key={index} />;
                            }
                        )}
                    </Switch>
                </Router>
            </Suspense>
        );
    }
}
