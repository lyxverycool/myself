import * as React from 'react';
import { bindActionCreators } from 'redux';
import { asyncAction, asyncPromiseAction } from '../../actions/home';
import Hello from '../../components/Hello';
import { connect } from 'react-redux';
import '../../assets/scss/index.scss';
import Pagination from 'antd/lib/pagination/Pagination';
import Button from 'antd/lib/button/button';
import * as _ from 'lodash';
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

    /*组件渲染完成，只执行一次*/
    componentDidMount() {
        return true;
    }

    /*组件将要接受新的props执行，执行多次*/
    componentWillReceiveProps(nextProps: any) {
        _.isEqual(this.props, nextProps);
        // 只有在非promise返回类型的情况下才会执行
        if (nextProps.asyncData.data instanceof Object) {
            //同步获取数据
            this.setState({
                code: nextProps.asyncData.data.code
            })
        }
    }

    /*判断组件是否需要重新渲染，默认返回true*/
    shouldComponentUpdate(nextProps: any, nextState: any) {
        // console.log(this.props.asyncData !== nextProps.asyncData)
        return this.props.asyncData !== nextProps.asyncData;
    }

    /*组件将要被重新渲染*/
    componentWillUpdate() {
        return true;
    }

    /*组件重新渲染完成*/
    componentDidUpdate() {
        return true;
    }

    /*卸载组件*/
    componentWillUnmount() {
        return true;
    }
    
    componentDidCatch(error: any, info: any) {
       console.log(error);
       console.log(info);
    }

    onShowSizeChange = (current: number, pageSize: number) => {
        console.log(current, pageSize);
    }

    getAsyncData = () => {
        const easyData = this.props.asyncPromiseAction();
        easyData.data.then((res: any) => {
            this.setState({isAsync: true});
            console.log(res);
        })
        return true;
    }

    getSynchData = () => {
        this.setState({isAsync: false});
        this.props.asyncAction();
        return true;
    }

    render() {
        return (
            <div className="homePage">
                <Hello name={this.state.name} /> <br />
                <Pagination showSizeChanger={true} onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} /> <br />
                <Button type="primary" onClick={this.getAsyncData}>异步Data</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={this.getSynchData}>同步Data</Button>
                <label>{this.state.code}</label>
                <br />
                {/* <HButton type="dashed" text="hui-admin测试11组件" icon="search" addonRight={true} /> */}
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
