import * as React from 'react';
import * as moment from 'moment';
import { bindActionCreators } from 'redux';
import { asyncAction, asyncPromiseAction } from '../../actions/home';
import { connect } from 'react-redux';
import '../../assets/less/common.less';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

class Home extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            startDate: {},//开始时间 此前所有时间禁止
            afterDateDisabled: {}//此后所有时间禁止
        }
        this.onCalendarChange = this.onCalendarChange.bind(this)
        this.disabledDate = this.disabledDate.bind(this)
    }
    componentWillMount() {
        //this.props.asyncAction();
    }
    onCalendarChange(dates: any, dateStrings: any) {
        this.setState({
            startDate: dates[0],
            afterDateDisabled: moment(dates[0]).add(3, 'months')//三个月后时间
        })
    }
    disabledDate(current: any) {
        if (JSON.stringify(this.state.startDate) === '{}') {
            return current < moment('1900-01-01');
        } else {
            return current > moment(this.state.afterDateDisabled)
        }
    }
    render() {
        return (
            <div className="homePage">
                <RangePicker
                    disabledDate={this.disabledDate}
                    onCalendarChange={this.onCalendarChange}
                    format="YYYY-MM-DD"
                />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        homeData: state.homeReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        asyncAction: bindActionCreators(asyncAction, dispatch),
        asyncPromiseAction: bindActionCreators(asyncPromiseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
