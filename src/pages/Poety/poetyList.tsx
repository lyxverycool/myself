import * as React from 'react';
import * as moment from 'moment';
import { bindActionCreators } from 'redux';
import { queryPoetyAction } from '../../actions/poety';
import { connect } from 'react-redux';

class PoetyList extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context)
    }
    componentDidMount() {
        this.props.queryPoetyAction();
    }
    render() {
        const { poetyData } = this.props;
        console.log(poetyData)
        return (
            <div className="homePage">
                {
                    poetyData.length > 0 ? poetyData.map((item: any, index: any) => {
                        return <div className="list" key={index}>
                            <span>{item.title}</span>
                            <span>{moment(item.createTime).format('YYYY-MM')}</span>
                        </div>
                    }) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        poetyData: state.poetyReducer.poetyList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        queryPoetyAction: bindActionCreators(queryPoetyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoetyList)
