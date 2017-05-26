import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component{
	constructor(props){
		super(props)	
	}		
	render(){		
		return(
			<div className="common">
		        <footer> 
		        	<div className="footer flex">
		        		<div className="message">
		        			<div className="logo"><img src={require("../../images/logo.png")} /></div>
							<span className="copyright">Copyright © 2017</span>
			        		<span className="name">李元夕cool</span><span>的个人网站</span>
		        		</div>
		        		<div className="content">
							<div className="content-list">淡然的心  宁静的表</div>
							<div className="word">My heart is so warm that my name is cool</div>
		        		</div>
			        	<img className="wechat" src={require("../../images/wechat.jpg")} alt=""/>
		        	</div>				                   
		        </footer>
			</div>
		)
	}
}