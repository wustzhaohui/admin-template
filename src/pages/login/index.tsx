/*
 * @Author: zhaohui
 * @Date: 2021-06-18 14:38:51
 * @LastEditTime: 2021-06-20 15:09:02
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/pages/login/index.tsx
 */
import React, { Component } from 'react';
import { Layout, Row, Col, Form, Input, Button, Typography } from 'antd';
import Particles from 'react-particles-js';
import { FormInstance } from 'antd/lib/form';
import api_login, { Login as LoginInt } from 'service/main';
import { FormItem } from 'utils';
interface MyState {
    formList: FormItem[];
}
const { Title } = Typography;
export default class Login extends Component<any, MyState> {
    formRef = React.createRef<FormInstance>();
    constructor(props: any) {
        super(props);
        this.state = {
            formList: [
                {
                    name: 'account',
                    label: '账号',
                    placeholder: '请输入账号',
                    type: 1,
                    rules: [
                        {
                            required: true
                        }
                    ]
                },
                {
                    name: 'password',
                    label: '密码',
                    placeholder: '请输入密码',
                    type: 1,
                    inputType: 'password',
                    rules: [
                        {
                            required: true
                        }
                    ]
                }
            ]
        };
    }
    async onFinish(values: LoginInt): Promise<void> {
        try {
            await api_login.login(values);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const layout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const { formList } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: '#000000',
                                    blur: 1
                                }
                            },
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: '#000000'
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 10,
                                    color: '#ffffff'
                                },
                                polygon: {
                                    nb_sides: 20
                                }
                            },
                            opacity: {
                                value: 0.3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 0.3,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 2,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 180,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            move: {
                                enable: true,
                                speed: 2,
                                direction: 'none',
                                random: true,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'repulse'
                                }
                            },
                            modes: {
                                grab: {
                                    distance: 100,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 100,
                                    size: 80,
                                    duration: 2,
                                    opacity: 0.8
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(26,29,35,1)',
                        position: 'fixed',
                        left: 0,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        top: 0,
                        bottom: 0,
                        height: '100%',
                        zIndex: 1
                    }}
                />
                <Row
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        zIndex: 2
                    }}
                    align="middle"
                    justify="center"
                >
                    <Col span={6}>
                        <Title className="text-center">xxx后台管理系统</Title>
                        <Form
                            {...layout}
                            ref={this.formRef}
                            name="control-ref"
                            onFinish={this.onFinish.bind(this)}
                        >
                            {formList.map((item: FormItem) => {
                                let inputTag;
                                let { type } = item;
                                if (type === 1) {
                                    inputTag = (
                                        <Input
                                            placeholder={item.placeholder}
                                            type={item.inputType}
                                            suffix={item.suffix}
                                        />
                                    );
                                }
                                return (
                                    <Form.Item
                                        key={item.name}
                                        name={item.name}
                                        label={item.label}
                                        initialValue={item.initialValue}
                                        rules={item.rules}
                                    >
                                        {inputTag}
                                    </Form.Item>
                                );
                            })}
                            <Form.Item label=" " colon={false}>
                                <Button htmlType="submit" block type="primary">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        );
    }
}
