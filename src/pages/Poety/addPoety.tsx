import * as React from 'react';
import PoetyForm from './poetyForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPoetyAction } from '../../actions/poety';
import { Button } from 'antd';
import * as moment from 'moment';

class AddPoety extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            refInstance: null,
            form: {
                title: '',
                content: '',
                type: 'poety',
                toOther: false,
                createTime: moment()
            }
        }
        this.submit = this.submit.bind(this)
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.poetyData.addPoety) {
            this.props.history.push('/poety')
        }
    }
    refAddNotice = (instance: any) => {
        this.setState({ refInstance: instance });
    }
    submit() {
        this.state.refInstance.validateFields(
            (err: any) => {
                if (!err) {
                    const params = this.state.refInstance.getFieldsValue();
                    this.props.addPoetyAction(params)
                }
            }
        );
    }
    render() {
        return (
            <div className="list">
                <PoetyForm ref={this.refAddNotice} formData={this.state.form} />
                <div className='text-center'>
                    <Link to={'/poety/poetyList'}>
                        <Button>取消</Button>
                    </Link>
                    <Button type="primary" onClick={this.submit}>提交</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        poetyData: state.poetyReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPoetyAction: bindActionCreators(addPoetyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPoety)

