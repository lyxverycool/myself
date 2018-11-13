import * as React from 'react';
import { bindActionCreators } from 'redux';
import { List } from 'antd';
import { getBokeyuanAction } from '../../actions/crawler';
import { connect } from 'react-redux';
import '../../assets/less/common.less';

class Crawler extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    componentWillMount() {
        this.props.getBokeyuanAction();
    }
    renderList(item: any) {
        return (
            <List.Item key={item._id} >
                <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.day}
                />
            </List.Item>
        )
    }
    render() {
        const { bokeyuanData, loading } = this.props.crawlerData;
        console.log(this.props.crawlerData)
        return (
            <div className="homePage">
                <List
                    itemLayout="horizontal"
                    dataSource={bokeyuanData}
                    renderItem={this.renderList}
                    loading={loading}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        crawlerData: state.crawlerReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getBokeyuanAction: bindActionCreators(getBokeyuanAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crawler)
