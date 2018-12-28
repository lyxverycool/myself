import * as React from 'react';
import { bindActionCreators } from 'redux';
import { List, Pagination } from 'antd';
import { getBokeyuanAction } from '../../actions/crawler';
import { connect } from 'react-redux';
import '../../assets/less/common.less';

class Crawler extends React.Component<any, any> {
	constructor(props: any, context: any) {
		super(props, context);
		this.state = {
			page: 1,
			blogItems: []
		}
	}
	componentWillMount() {
		this.props.getBokeyuanAction();
	}

	componentWillReceiveProps(nextProps: any) {
		if (!nextProps.crawlerData.loading) {
			this.setState({
				blogItems: nextProps.crawlerData.bokeyuanData.slice(0, 5)
			})
		}
	}

	pageChange = (page: any) => {
		this.setState({
			page
		})
		const { bokeyuanData } = this.props.crawlerData;
		const blogItems = bokeyuanData.slice((page - 1) * 5, page * 5);
		this.setState({
			page,
			blogItems
		})
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
		return (
			<div className="homePage">
				<List
					itemLayout="horizontal"
					dataSource={this.state.blogItems}
					renderItem={this.renderList}
					loading={loading}
				/>
				<Pagination defaultCurrent={1} current={this.state.page} onChange={this.pageChange} pageSize={5} total={bokeyuanData.length} />
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
