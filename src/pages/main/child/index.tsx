/*
 * @Author: zhaohui
 * @Date: 2021-06-18 14:38:51
 * @LastEditTime: 2021-06-19 18:52:54
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /admin-template/src/pages/main/child/index.tsx
 */
import { Card } from 'antd';
import React, { Component } from 'react';
interface MyState {}
export default class Login extends Component<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }
    render() {
        return <Card title="管理"></Card>;
    }
}
