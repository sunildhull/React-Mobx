import React from "react";
import PropTypes from "prop-types";

export class Like extends React.Component {

    constructor(props,context){
        super(props);
        console.log("Like Component created");
        console.log("Like Context", context);
    }
    
    //called many times based on parent render method
    componentWillReceiveProps(nextProps){
       console.log("current",this.props);
       console.log("next",nextProps);
    }

    //decide whetere react can call render or notre
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should Update");
        

        if(nextProps.likes % 5==0)
            return true; //call render
        return false;  //do not render
    }
    render() {
        console.log("Like render called");
        return (
            <div>
                 
                <h1>Like - {this.props.likes}</h1>

                <button onClick={ ()=> this.props.onIncr() }>
                    +1
                </button>
            </div>
        )
    }
}

Like.contextTypes ={
    appTitle: PropTypes.string
}