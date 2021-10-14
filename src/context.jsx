import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };

  componentDidCatch() {
    this.setProducts();
  }

  setProducts = () => {
    let temproducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      temproducts = [...temproducts, singleItem];
    });
    this.setState(() => {
      return { products: temproducts };
    });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
