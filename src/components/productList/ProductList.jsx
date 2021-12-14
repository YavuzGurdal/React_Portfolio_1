import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's YvzWebDev</h1>
        <p className="pl-desc">
          YvzWebDev is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            title={item.title}
            category={item.category}
            link={item.link}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
