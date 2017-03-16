import React,{Component,PropTypes} from "react";


export default class Index extends Component{
  constructor(props){
    super(props)
  }  
  render(){
    return (
      <div>
        <div className="index">
          <canvas id="canvas" style={{width:'500px'}}>当前浏览器不支持canvas，请更换浏览器后再试</canvas>
        </div>
      </div>
    );
  }

}