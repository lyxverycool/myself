import * as React from 'react';
import { bindActionCreators } from 'redux';
import { asyncAction, asyncPromiseAction } from '../../actions/home';
import Hello from '../../components/Hello';
import { connect } from 'react-redux';
import '../../assets/less/index.less';
import { Pagination } from 'antd';
// import { HButton } from 'hui-admin';

class Home extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            name: 'React Intl',
            code: '',
            isAsync: false
        };
    }

    /*组件挂载之前执行，只执行一次*/
    componentWillMount() {
        // process.env 获取当前环境变量
        this.props.asyncAction();
    }

    render() {
        console.log(this.props.asyncData)
        return (
            <div className="homePage">
                <Hello name={this.state.name} /> <br />
                <Pagination showSizeChanger={true} defaultCurrent={3} total={500} /> <br />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        asyncData: state.asyncReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        asyncAction: bindActionCreators(asyncAction, dispatch),
        asyncPromiseAction: bindActionCreators(asyncPromiseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
