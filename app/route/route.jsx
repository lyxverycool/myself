import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import Index from '../components/index';

require ('../style/common.scss');
require ('../style/index.scss');

class Main extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};
const route =(
	<Router history={hashHistory}>
       <Route path="/" component={Main}>
       	   <IndexRoute component={Index}/>
	         <Route path="/index" component={Index}/>  
  	   </Route>
  </Router>
)

export default route;



