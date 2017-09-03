import React, {Component} from "react"; //from node_modules
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import PropTypes from "prop-types";

export class App extends Component{


    constructor(){
        super();
        this.show=true;
    }

    getChildContext(){
        console.log("get context called");
        return{
            appTitle:"React App",
            theme:"white"

        }
    }

    // componentDidMount(){
    //    setTimeout( ()=> {
    //     console.log("hello console did mount");
    //     this.show=!this.show;

    //     //calls render internally
    //     this.forceUpdate();
    //    }, 3000);
    // }
    //returns a view
//<
    render(){
     //  return React.createElement("h1",{id:"header"},"Sunil is learning React");
     return(
         <div>
         <h1 id="header">App.js file content</h1>
         {this.show && <Header title="React App" />}
         <div>
                {this.props.children}
            </div>
         <Footer year={2017} company="Sapient"/>
         </div>
     );
    }

   
}

App.childContextTypes ={
    appTitle: PropTypes.string,
    theme: PropTypes.string
}