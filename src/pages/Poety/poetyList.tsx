import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { queryPoetyAction } from '../../actions/poety';
import { connect } from 'react-redux';
import { Button, Pagination, List, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class PoetyList extends React.Component<any, any> {
	constructor(props: any, context: any) {
		super(props, context)
		this.state = {
			type: "all",
			page: 1
		}
		this.pageChange = this.pageChange.bind(this)
		this.tabChange = this.tabChange.bind(this)
		this.queryPoety = this.queryPoety.bind(this)
	}
	componentDidMount() {
		this.queryPoety(this.state.type, this.state.page)
	}
	tabChange(key: any) {
		this.setState({
			type: key,
			page: 1
		})
		this.queryPoety(key, 1);
	}
	pageChange(page: any) {
		this.setState({
			page
		})
		this.queryPoety(this.state.type, page);
	}
	queryPoety(type: any, page: any) {
		const params = {
			type, page
		}
		this.props.queryPoetyAction(params);
	}
	renderPoetyList(item: any) {
		return (
			<List.Item key={item._id} >
				<List.Item.Meta
					title={<Link to={`/poety/poetyDetail/${item._id}`}>{item.title}</Link>}
					description={moment(item.createTime).format('YYYY-MM')}
				/>
			</List.Item>
		)
	}
	render() {
		const { poetyData, loading } = this.props;
		console.log(loading)
		return (
			<div className="homePage">
				<Link to={'/poety/addPoety'}>
					<Button type="primary">添加</Button>
				</Link>
				<Tabs defaultActiveKey="all" onChange={this.tabChange}>
					<TabPane tab="全部" key="all" />
					<TabPane tab="诗" key="poety" />
					<TabPane tab="词" key="chant" />
					<TabPane tab="歌曲" key="lyrics" />
					<TabPane tab="文章" key="article" />
				</Tabs>
				<List
					itemLayout="horizontal"
					dataSource={poetyData.poetyList}
					renderItem={this.renderPoetyList}
					loading={loading}
				/>
				<Pagination defaultCurrent={1} current={this.state.page} onChange={this.pageChange} pageSize={5} total={poetyData.total} />
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		poetyData: state.poetyReducer.poetyData,
		loading: state.poetyReducer.loading
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		queryPoetyAction: bindActionCreators(queryPoetyAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PoetyList)
