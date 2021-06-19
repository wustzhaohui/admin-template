/*
 * @Author: zhaohui
 * @Date: 2021-06-19 17:04:34
 * @LastEditTime: 2021-06-19 19:03:13
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/pages/main/index.tsx
 */
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { RouterConfigModel } from 'utils';
import { Route, Switch } from 'react-router-dom';
import store from 'store';
import { SET_CHILD_MENU } from 'store/contants';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
interface MyState {
    collapsed: boolean;
    routers: RouterConfigModel[];
}
export default class Main extends Component<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = { collapsed: false, routers: [] };
    }
    onCollapse(collapsed: boolean) {
        this.setState({ collapsed });
    }
    getRouters() {
        store.dispatch({
            type: SET_CHILD_MENU,
            data: this.props.match.path,
        });
        this.setState({
            routers: store.getState().childMenu,
        });
    }
    componentDidMount() {
        this.getRouters.call(this);
    }
    render() {
        const { collapsed, routers } = this.state;
        return (
            <Layout className="main" style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse.bind(this)}
                >
                    <div className="logo">LOGO</div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                    >
                        {routers.map((item: RouterConfigModel) => {
                            if (item.routes) {
                                return (
                                    <SubMenu
                                        key={item.path}
                                        icon={<UserOutlined />}
                                        title={item.name}
                                    >
                                        {item.routes.map(
                                            (s: RouterConfigModel) => (
                                                <Menu.Item key={s.path}>
                                                    {s.name}
                                                </Menu.Item>
                                            )
                                        )}
                                    </SubMenu>
                                );
                            } else {
                                <Menu.Item
                                    key={item.path}
                                    icon={<PieChartOutlined />}
                                >
                                    {item.name}
                                </Menu.Item>;
                            }
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                {routers.map(
                                    (
                                        item: RouterConfigModel,
                                        index: number
                                    ) => {
                                        return (
                                            <Route {...item} key={item.path} />
                                        );
                                    }
                                )}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Design by Fred Zhao
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
