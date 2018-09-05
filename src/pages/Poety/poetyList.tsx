import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { queryPoetyAction } from '../../actions/poety';
import { connect } from 'react-redux';
import { Button, Pagination } from 'antd';

class PoetyList extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context)
        this.state = {
            page: 1
        }
        this.pageChange = this.pageChange.bind(this)
    }
    componentDidMount() {
        const params = {
            type: '',
            page: 1
        };
        this.props.queryPoetyAction(params);
    }
    pageChange(page: any) {
        const params = {
            type: '',
            page
        }
        this.setState({
            page
        })
        this.props.queryPoetyAction(params);
    }
    render() {
        const { poetyData } = this.props;
        return (
            <div className="homePage">
                <Link to={'/poety/addPoety'}>
                    <Button type="primary">添加</Button>
                </Link>
                {
                    poetyData.poetyList.length > 0 ? poetyData.poetyList.map((item: any, index: any) => {
                        return <div className="list" key={index}>
                            <Link to={`/poety/poetyDetail/${item._id}`}>
                                {item.title}
                            </Link>
                            <span>{moment(item.createTime).format('YYYY-MM')}</span>
                        </div>
                    }) : null
                }
                <Pagination defaultCurrent={1} current={this.state.page} onChange={this.pageChange} pageSize={5} total={poetyData.total} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        poetyData: state.poetyReducer.poetyData
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        queryPoetyAction: bindActionCreators(queryPoetyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoetyList)
