import * as React from 'react';
import { bindActionCreators } from 'redux';
import { asyncAction, asyncPromiseAction } from '../../actions/home';
import { connect } from 'react-redux';
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './home.less';
import { Button } from 'antd';

class Home extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            name: 'React Intl',
            code: '',
            text: '',
            isAsync: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this)
    }

    /*组件挂载之前执行，只执行一次*/
    componentWillMount() {
        // process.env 获取当前环境变量
        this.props.asyncAction();
    }
    handleChange(value: any) {
        this.setState({ text: value })
    }
    save() {
        console.log(this.state.text)
    }
    render() {
        return (
            <div className="homePage">
                <ReactQuill theme="snow" value={this.state.text}
                    onChange={this.handleChange} />
                <Button type="primary" onClick={this.save}>保存</Button>
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
