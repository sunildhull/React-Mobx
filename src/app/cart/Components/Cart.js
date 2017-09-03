import React from "react";
import CartList from "./CartList";

import{inject,observer} from "mobx-react";

@inject("cart")

export default class Cart extends React.Component {
    componentDidMount(){
       // this.props.cart.loadItems();
    }
    render() {
        return (
            <div>
              <h2>    Cart - {this.props.cart.items.length} </h2>
              <h2>    Cart - {this.props.cart.cartSize} -{this.props.cart.amount}</h2>
              <CartList/>
            </div>
        )
    }
}