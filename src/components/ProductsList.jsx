import React, { useState } from "react";
import Product from "./Product";
import Title from "./Title";

function ProductsList() {
  const [products, setProducts] = useState([]);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row"></div>
        </div>
      </div>
    </React.Fragment>
    /* <Product /> */
  );
}

export default ProductsList;
