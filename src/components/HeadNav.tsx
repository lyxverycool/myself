import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default class HeadNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <Header className="header">
                <div className="logo left" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home"><Link to="/home"><span>首页</span></Link></Menu.Item>
                    <Menu.Item key="poety"><Link to="/poety"><span>文学</span></Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}