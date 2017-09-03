webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Like = __webpack_require__(238);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = exports.Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = { likes: 1000 };

        return _this;
    }

    _createClass(Home, [{
        key: "increment",
        value: function increment() {
            console.log("Home Increment");
            this.setState({
                likes: this.state.likes + 1
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "Home"
                ),
                _react2.default.createElement(_Like.Like, { likes: this.state.likes, onIncr: function onIncr() {
                        return _this2.increment();
                    } })
            );
        }
    }]);

    return Home;
}(_react.Component);

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _Routes = __webpack_require__(207);

var _Routes2 = _interopRequireDefault(_Routes);

var _CartState = __webpack_require__(251);

var _CartState2 = _interopRequireDefault(_CartState);

var _ProductState = __webpack_require__(253);

var _ProductState2 = _interopRequireDefault(_ProductState);

var _mobx = __webpack_require__(41);

var _mobxReact = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//enfore action method to adopt flux architecture


// import {App} from "./app/app";

(0, _mobx.useStrict)(true);
console.log("production", true);
//CartState.loadItems();


var store = {
    cart: _CartState2.default,
    productState: _ProductState2.default

};

(0, _reactDom.render)(_react2.default.createElement(
    _mobxReact.Provider,
    store,
    _react2.default.createElement(_Routes2.default, null)
), document.getElementById("root"));

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Routes;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _App = __webpack_require__(235);

var _Home = __webpack_require__(106);

var _About = __webpack_require__(240);

var _Contact = __webpack_require__(241);

var _cart = __webpack_require__(242);

var _cart2 = _interopRequireDefault(_cart);

var _Routes = __webpack_require__(245);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Route config

function Routes() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            _App.App,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: "/",
                    exact: true,
                    component: _Home.Home }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/about",
                    component: _About.About }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/contact",
                    component: _Contact.Contact }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/cart",
                    component: _cart2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/products",
                    component: _Routes2.default })
            )
        )
    );
}
//import ProductList from "./product/components/ProductList";


// import {HashRouter as Router, Route, Switch}
//     from "react-router-dom";

// remove the # from the url

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(236);

var _Home = __webpack_require__(106);

var _Footer = __webpack_require__(239);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //from node_modules


var App = exports.App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.show = true;
        return _this;
    }

    _createClass(App, [{
        key: "getChildContext",
        value: function getChildContext() {
            console.log("get context called");
            return {
                appTitle: "React App",
                theme: "white"

            };
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

    }, {
        key: "render",
        value: function render() {
            //  return React.createElement("h1",{id:"header"},"Sunil is learning React");
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    { id: "header" },
                    "App.js file content"
                ),
                this.show && _react2.default.createElement(_Header.Header, { title: "React App" }),
                _react2.default.createElement(
                    "div",
                    null,
                    this.props.children
                ),
                _react2.default.createElement(_Footer.Footer, { year: 2017, company: "Sapient" })
            );
        }
    }]);

    return App;
}(_react.Component);

App.childContextTypes = {
    appTitle: _propTypes2.default.string,
    theme: _propTypes2.default.string
};

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _mobxReact = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import CartState from "./cart/CartState";


var Header = exports.Header = (_dec = (0, _mobxReact.inject)("cart"), _dec(_class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    //callback
    //Before loading view
    //called before render method


    _createClass(Header, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log("hello console will mount");
        }

        //called afetr loading view
        //called after calling render method first time
        //view ready

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("hello console did mount");
        }

        //called just before destroying componet

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("hello console will Unmount");
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                "hello header",
                _react2.default.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/",
                        exact: true,
                        className: "button",
                        activeClassName: "success" },
                    "Home"
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/About",
                        exact: true,
                        className: "button",
                        activeClassName: "success" },
                    "About"
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/Contact",
                        exact: true,
                        className: "button",
                        activeClassName: "success" },
                    "Contact"
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/Cart",
                        exact: true,
                        className: "button",
                        activeClassName: "success" },
                    "Cart [",
                    this.props.cart.cartSize,
                    "] -RS ",
                    this.props.cart.amount
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/products",
                        exact: true,
                        className: "button",
                        activeClassName: "success" },
                    "Products"
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component)) || _class);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Like = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Like = exports.Like = function (_React$Component) {
    _inherits(Like, _React$Component);

    function Like(props, context) {
        _classCallCheck(this, Like);

        var _this = _possibleConstructorReturn(this, (Like.__proto__ || Object.getPrototypeOf(Like)).call(this, props));

        console.log("Like Component created");
        console.log("Like Context", context);
        return _this;
    }

    //called many times based on parent render method


    _createClass(Like, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            console.log("current", this.props);
            console.log("next", nextProps);
        }

        //decide whetere react can call render or notre

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            console.log("Should Update");

            if (nextProps.likes % 5 == 0) return true; //call render
            return false; //do not render
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("Like render called");
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "Like - ",
                    this.props.likes
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this2.props.onIncr();
                        } },
                    "+1"
                )
            );
        }
    }]);

    return Like;
}(_react2.default.Component);

Like.contextTypes = {
    appTitle: _propTypes2.default.string
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Footer = Footer;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
            "p",
            null,
            "Copyrights@",
            props.year,
            ", ",
            props.company
        )
    );
}
//vaildation and error handling
Footer.propTypes = {
    year: _propTypes2.default.number.isRequired,
    company: _propTypes2.default.string
};

Footer.defaultProps = {
    company: "Sunil co.in"
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = exports.About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About(props, context) {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "About"
                )
            );
        }
    }]);

    return About;
}(_react2.default.Component);

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Contact = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = exports.Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact(props, context) {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "Contact"
                )
            );
        }
    }]);

    return Contact;
}(_react2.default.Component);

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _CartList = __webpack_require__(243);

var _CartList2 = _interopRequireDefault(_CartList);

var _mobxReact = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_dec = (0, _mobxReact.inject)("cart"), _dec(_class = function (_React$Component) {
    _inherits(Cart, _React$Component);

    function Cart() {
        _classCallCheck(this, Cart);

        return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
    }

    _createClass(Cart, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.props.cart.loadItems();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "    Cart - ",
                    this.props.cart.items.length,
                    " "
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "    Cart - ",
                    this.props.cart.cartSize,
                    " -",
                    this.props.cart.amount
                ),
                _react2.default.createElement(_CartList2.default, null)
            );
        }
    }]);

    return Cart;
}(_react2.default.Component)) || _class);
exports.default = Cart;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(20);

var _CartItem = __webpack_require__(244);

var _CartItem2 = _interopRequireDefault(_CartItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CartList(props) {
    var _props$cart = props.cart,
        items = _props$cart.items,
        amount = _props$cart.amount;

    //getting the data

    var list = items.map(function (item) {
        return _react2.default.createElement(_CartItem2.default, { item: item, key: item.id,

            onRemove: function onRemove() {
                return props.cart.removeItem(item.id);
            },
            onUpdate: function onUpdate(qty) {
                return props.cart.updateItem(item.id, qty);
            }
        });
    });
    return _react2.default.createElement(
        "div",
        null,
        "Cart List ",
        props.cart.amount,
        _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
                "tbody",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "th",
                        null,
                        " Name "
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        " Price "
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        " Quantity "
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        " Update "
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        " Delete "
                    )
                ),
                list
            )
        )
    );
}

exports.default = (0, _mobxReact.inject)("cart")((0, _mobxReact.observer)(CartList));

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartItem = function (_React$Component) {
    _inherits(CartItem, _React$Component);

    function CartItem() {
        _classCallCheck(this, CartItem);

        return _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).apply(this, arguments));
    }

    _createClass(CartItem, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var item = this.props.item;

            var props = this.props;

            //es5 let item = props.item

            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    item.name
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    item.price
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement("input", { name: "quantity"
                        /* value={item.quantity} */
                        , ref: function ref(elem) {
                            return _this2.input = elem;
                        }
                    })
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "button",
                        { onclick: function onclick() {
                                return props.onUpdate(_this2.input.value);
                            } },
                        "Update"
                    )
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "button",
                        { onClick: props.onRemove },
                        "Delete"
                    )
                )
            );
        }
    }]);

    return CartItem;
}(_react2.default.Component);

exports.default = CartItem;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = Routes;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _ProductHome = __webpack_require__(246);

var _ProductHome2 = _interopRequireDefault(_ProductHome);

var _ProductList = __webpack_require__(247);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _ProductEdit = __webpack_require__(249);

var _ProductEdit2 = _interopRequireDefault(_ProductEdit);

var _ProductSearch = __webpack_require__(250);

var _ProductSearch2 = _interopRequireDefault(_ProductSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes(props) {
        return _react2.default.createElement(
                _ProductHome2.default,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: "/products",
                        exact: true,
                        component: _ProductList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/products/create",
                        component: _ProductEdit2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/products/edit/:id",
                        component: _ProductEdit2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/products/search",
                        component: _ProductSearch2.default })
        );
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductHome = function (_Component) {
    _inherits(ProductHome, _Component);

    function ProductHome(props) {
        _classCallCheck(this, ProductHome);

        return _possibleConstructorReturn(this, (ProductHome.__proto__ || Object.getPrototypeOf(ProductHome)).call(this, props));
    }

    _createClass(ProductHome, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "Product Home"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/products",
                            exact: true,
                            className: "button",
                            activeClassName: "success" },
                        "Products"
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/products/create",

                            className: "button",
                            activeClassName: "success" },
                        "Create"
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/products/search",

                            className: "button",
                            activeClassName: "success" },
                        "Search"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return ProductHome;
}(_react.Component);

exports.default = ProductHome;


ProductHome.defaultProps = {};

ProductHome.propTypes = {};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(20);

var _ProductWidget = __webpack_require__(248);

var _ProductWidget2 = _interopRequireDefault(_ProductWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = (_dec = (0, _mobxReact.inject)("productState"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(ProductList, _React$Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
    }

    _createClass(ProductList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.productState.getProducts();
        }
    }, {
        key: "render",
        value: function render() {

            var list = this.props.productState.products.map(function (product) {
                return _react2.default.createElement(
                    _ProductWidget2.default,
                    { key: product.id, product: product },
                    product.name
                );
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "flex two" },
                    list
                )
            );
        }
    }]);

    return ProductList;
}(_react2.default.Component)) || _class) || _class);
exports.default = ProductList;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(29);

var _mobxReact = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductWidget(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "article",
            { className: "card" },
            _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    props.product.name
                )
            ),
            _react2.default.createElement(
                "p",
                null,
                "Weight: ",
                props.product.weight
            ),
            _react2.default.createElement(
                "p",
                null,
                "Price: ",
                props.product.price
            ),
            _react2.default.createElement(
                "p",
                null,
                "Year: ",
                props.product.year
            ),
            _react2.default.createElement(
                "footer",
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/products/edit/" + props.product.id,
                        className: "button" },
                    "Edit"
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return props.cart.addItem(props.product);
                        } },
                    "+Cart"
                )
            )
        )
    );
}

ProductWidget.defaultProps = {};

ProductWidget.propTypes = {};

exports.default = (0, _mobxReact.inject)("cart")((0, _mobxReact.observer)(ProductWidget));

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductEdit = (_dec = (0, _mobxReact.inject)("productState"), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(ProductEdit, _Component);

    function ProductEdit(props) {
        _classCallCheck(this, ProductEdit);

        return _possibleConstructorReturn(this, (ProductEdit.__proto__ || Object.getPrototypeOf(ProductEdit)).call(this, props));
    }

    _createClass(ProductEdit, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var id = this.props.match.params.id;
            if (id) {
                //edit
                this.props.productState.getProduct(id);
            } else {
                //create
                this.props.productState.createProduct();
            }
        }
    }, {
        key: "onValueChange",
        value: function onValueChange(e) {
            var name = e.target.name;
            var value = e.target.value;
            console.log(name, value);

            this.props.productState.setProductValue(name, value);
        }
    }, {
        key: "save",
        value: function save(e) {
            //stop browser form submit automatically
            e.preventDefault();

            this.props.productState.saveProduct();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var product = this.props.productState.product;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "Product Edit"
                ),
                _react2.default.createElement(
                    "form",
                    { onSubmit: function onSubmit(e) {
                            return _this2.save(e);
                        } },
                    "Name",
                    _react2.default.createElement("input", { name: "name",
                        value: product.name,

                        onChange: function onChange(e) {
                            return _this2.onValueChange(e);
                        }
                    }),
                    "Year",
                    _react2.default.createElement("input", { name: "year",
                        value: product.year,
                        onChange: function onChange(e) {
                            return _this2.onValueChange(e);
                        }

                    }),
                    _react2.default.createElement(
                        "button",
                        { type: "submit" },
                        "Save"
                    )
                )
            );
        }
    }]);

    return ProductEdit;
}(_react.Component)) || _class) || _class);
exports.default = ProductEdit;


ProductEdit.defaultProps = {};

ProductEdit.propTypes = {};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductSearch = function (_Component) {
    _inherits(ProductSearch, _Component);

    function ProductSearch(props) {
        _classCallCheck(this, ProductSearch);

        return _possibleConstructorReturn(this, (ProductSearch.__proto__ || Object.getPrototypeOf(ProductSearch)).call(this, props));
    }

    _createClass(ProductSearch, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "ProductSearch"
                )
            );
        }
    }]);

    return ProductSearch;
}(_react.Component);

exports.default = ProductSearch;


ProductSearch.defaultProps = {};

ProductSearch.propTypes = {};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(41);

var _mockData = __webpack_require__(252);

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var CartState = (_class = function () {
    function CartState() {
        _classCallCheck(this, CartState);

        _initDefineProp(this, "items", _descriptor, this);
    }

    _createClass(CartState, [{
        key: "loadItems",
        value: function loadItems() {
            this.items = (0, _mockData2.default)();
            console.log(this.items);
        }

        //derived data

    }, {
        key: "addItem",
        value: function addItem(product) {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            this.items = this.items.filter(function (item) {
                return item.id != id;
            });
        }

        //FIXME:

    }, {
        key: "updateItem",
        value: function updateItem(id, qty) {
            console.log(id, qty);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.id == id) {
                        item.quantity = parseInt(qty);
                        console.log("Found id");
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "cartSize",
        get: function get() {
            console.log("cart size called");
            return this.items.length;
        }
    }, {
        key: "amount",
        get: function get() {
            var sum = 0;
            for (var i = 0; i < this.items.length; i++) {
                sum += this.items[i].price;
            }

            return sum;
        }
    }]);

    return CartState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, "cartSize", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "cartSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "amount", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "amount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addItem", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeItem", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateItem", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateItem"), _class.prototype)), _class);
exports.default = new CartState();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generate;
function generate() {
    var items = [];

    for (var i = 0; i < 20; i++) {
        var item = {
            id: i,
            name: "Product " + i,
            price: Math.ceil(Math.random() * 1000),
            quantity: 0
        };

        items.push(item);
    }

    return items;
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

//fixme: load from webpack
// let config = {
//     "apiEndPoint" : "http://localhost:7070",
//     "authEndPoint": "http://localhost:7070"
// }


//load from webpack external


var _mobx = __webpack_require__(41);

var _Restful = __webpack_require__(254);

var _Restful2 = _interopRequireDefault(_Restful);

var _config = __webpack_require__(255);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ProductState = (_class = function () {
    function ProductState() {
        _classCallCheck(this, ProductState);

        _initDefineProp(this, "products", _descriptor, this);

        _initDefineProp(this, "product", _descriptor2, this);
    }

    _createClass(ProductState, [{
        key: "setProducts",
        value: function setProducts(products) {
            this.products = products;
        }
    }, {
        key: "getProducts",
        value: function getProducts() {
            var _this = this;

            _Restful2.default.getJson(_config2.default.apiEndPoint + "/api/products").then(function (products) {
                _this.setProducts(products);
            });
        }
    }, {
        key: "setProduct",
        value: function setProduct(product) {
            this.product = product;
        }
    }, {
        key: "createProduct",
        value: function createProduct() {
            this.product = {
                name: '',
                year: 2017
            };
        }
    }, {
        key: "getProduct",
        value: function getProduct(id) {
            var _this2 = this;

            _Restful2.default.getJson(_config2.default.apiEndPoint + "/api/products/" + id).then(function (product) {
                _this2.setProduct(product);
            });
        }
    }, {
        key: "setProductValue",
        value: function setProductValue(name, value) {
            this.product[name] = value;
        }
    }, {
        key: "saveProduct",
        value: function saveProduct() {
            var _this3 = this;

            if (this.product.id) {
                _Restful2.default.putJson(_config2.default.apiEndPoint + "/api/products/" + this.product.id, this.product).then(function (product) {
                    _this3.setProduct(product);
                });
            } else {
                _Restful2.default.postJson(_config2.default.apiEndPoint + "/api/products", this.product).then(function (product) {
                    _this3.setProduct(product);
                });
            }
        }
    }]);

    return ProductState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "products", [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, "setProducts", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setProducts"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getProducts", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getProducts"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "product", [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return { name: '', year: 2017 };
    }
}), _applyDecoratedDescriptor(_class.prototype, "setProduct", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createProduct", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "createProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getProduct", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setProductValue", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setProductValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveProduct", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveProduct"), _class.prototype)), _class);
exports.default = new ProductState();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Restful is simple class that wrap all fetch API
//Reusable one
//All methods returns promises
var Restful = function () {
    function Restful() {
        _classCallCheck(this, Restful);
    }

    //Core method, this uses window.fetch


    _createClass(Restful, [{
        key: 'fetchJson',
        value: function fetchJson(url, options) {
            return window.fetch(url, options).then(function (response) {
                return response.json();
            });
        }
    }, {
        key: 'getJson',
        value: function getJson(url, options) {
            return this.fetchJson(url, options);
            // .then ( response => {
            //     return response.json();
            // })
        }
    }, {
        key: 'postJson',
        value: function postJson(url, data) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            return this.fetchJson(url, {
                method: 'POST',
                headers: Object.assign({
                    'Content-Type': 'application/json'
                }, headers),
                body: JSON.stringify(data)
            });
        }
    }, {
        key: 'putJson',
        value: function putJson(url, data) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            return this.fetchJson(url, {
                method: 'PUT',
                headers: Object.assign({
                    'Content-Type': 'application/json'
                }, headers),
                body: JSON.stringify(data)
            });
        }
    }, {
        key: 'deleteJson',
        value: function deleteJson(url, data) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            return this.fetchJson(url, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(data)
            });
        }
    }]);

    return Restful;
}();

exports.default = new Restful();

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = {"apiEndPoint":"http://localhost:7070","authEndPoint":"http://localhost:7070"};

/***/ })

},[107]);
//# sourceMappingURL=bundle.js.map