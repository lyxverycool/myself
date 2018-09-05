import * as React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import '../assets/less/normal.less';

import HeadNav from '../components/HeadNav';

class App extends React.Component<any, any> {
    public render() {
        return (
            <Layout>
                <HeadNav />
                <Content>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default App;