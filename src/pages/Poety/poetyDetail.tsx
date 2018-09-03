import * as React from 'react';
import * as moment from 'moment';
import { bindActionCreators } from 'redux';
import { poetyDetailAction } from '../../actions/poety';
import { connect } from 'react-redux';

class PoetyDetail extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
  }
  componentWillMount() {
    const params = { id: this.props.match.params.poetyId }
    this.props.poetyDetailAction(params)
  }
  render() {
    const { poetyData, loading } = this.props;
    console.log(poetyData)
    return (
      <div className="homePage">
        {
          !loading ? <div className="detail">
            <div>{poetyData.title}</div>
            <div>{moment(poetyData.createTime).format('YYYY-MM')}</div>
            <div dangerouslySetInnerHTML={{ __html: poetyData.content }} />
          </div> : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    poetyData: state.poetyReducer.poetyDetail,
    loading: state.poetyReducer.loading
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    poetyDetailAction: bindActionCreators(poetyDetailAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoetyDetail)
