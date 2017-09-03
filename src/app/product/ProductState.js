import {observable, action} from "mobx";

import restful from "../core/Restful";

//fixme: load from webpack
// let config = {
//     "apiEndPoint" : "http://localhost:7070",
//     "authEndPoint": "http://localhost:7070"
// }


//load from webpack external
import config from "config";


class ProductState {

    @observable products = [];

    @action setProducts(products) {
        this.products = products;
    }

    @action getProducts() {
        restful.getJson( config.apiEndPoint + "/api/products")
        .then (products => {
            this.setProducts(products);
        })
    }


        @observable product = { name: '',year: 2017}

    @action setProduct(product) {
        this.product = product;
    }

    @action createProduct() {
        this.product = {
            name: '',
            year: 2017
        }
    }

    @action getProduct(id) {
        restful.getJson( config.apiEndPoint + "/api/products/" + id)
        .then (product => {
            this.setProduct(product);
        })
    }


    @action setProductValue(name, value) {
        this.product[name] = value;
    }

    @action saveProduct() {
        if (this.product.id) {
             restful.putJson(`${config.apiEndPoint}/api/products/${this.product.id}`,
                                    this.product)
                            .then ( product => {
                                this.setProduct(product);
                            })
        } else {
             restful.postJson(`${config.apiEndPoint}/api/products`,
                            this.product)
                            .then ( product => {
                                this.setProduct(product);
                            })

        }
    }
}

export default new ProductState();