import React,{Component,PropTypes} from "react";
import HeaderFirst from './common/headerFirst';
import HeaderOther from './common/headerOther';
import Footer from './common/./footer';

export default class Index extends Component{
  constructor(props){
    super(props);
    this.state={
      isScroll:false,
    }
    this.handleScroll=()=>{
      let scrollTop=document.body.scrollTop;
      if(scrollTop>90){
        this.setState({
            isScroll:true,
          })  
      }else{
        this.setState({
            isScroll:false,
        })  
      }
    }
  }  
  componentDidMount(){
     window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render(){
    return (
      <div className="component">
        <div className="index">
            <div className="bg">
               {this.state.isScroll?<HeaderOther />:<HeaderFirst/> } 
            </div>
            <div className="index-1" id="index-1"></div>
            <div className="index-2"></div>
            <div className="index-3"></div>
        </div>
        <Footer />
      </div>
    );
  }

}