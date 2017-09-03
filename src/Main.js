import React from "react";
import {render} from "react-dom";

// import {App} from "./app/app";

import Routes from "./app/Routes";


import CartState from "./app/cart/CartState";
import productState from "./app/product/ProductState";
import{useStrict} from "mobx";
import authState from "./app/auth/AuthState";
//enfore action method to adopt flux architecture
useStrict(true)
console.log("production", PRODUCTION);
//CartState.loadItems();


let store={
    cart:CartState,
    productState:productState,
    authState:authState

}

import{Provider} from "mobx-react";

render(<Provider {...store}>
    <Routes/>
    </Provider>,document.getElementById("root"));

