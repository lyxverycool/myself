import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class HeaderOther extends Component{
	constructor(props){
		super(props)	
	}		
	render(){		
		return(
			<div className="common">
				<div className="headers">
					<div className="header flex flex-align-center">
						<a href="#" className="logo"><img src={require("../../images/logo2.png")} alt=""/></a>
						<nav className="nav flex flex-justify-around">
							<li>诗词</li>
							<li>古文</li>
							<li>小说</li>
							<li>填曲</li>
							<li>个人经历</li>
						</nav>
		   	    		<canvas id="canvas"></canvas>	
					</div>	             
		   		</div>
			</div>
		)
	}
}