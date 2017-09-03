import React,{Component} from "react";
import {Like} from "./Like";
export class Home extends Component{

   constructor(props){
       super(props);
       this.state = {likes:1000}
         
      
   }
   increment(){
       console.log("Home Increment");
       this.setState({
           likes:this.state.likes+1
       })
   }
    render(){
        return (<div>
            <h1>Home</h1>
            <Like likes={this.state.likes} onIncr={()=>this.increment()} />
            </div>)
    }
}