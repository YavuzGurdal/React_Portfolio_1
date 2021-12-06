/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="p">
      <div className="p-container">
        <img src="" alt="" />
        <div className="p-data">
          <a
            href="https://github.com/YavuzGurdal"
            className="p-link"
            rel="noreferrer"
          >
            link
          </a>
          <span className="p-gitup">github</span>
        </div>

        {/* 
        <div className="p-data-up">
          <a
            href="https://github.com/YavuzGurdal"
            className="p-link"
            rel="noreferrer"
          >
            link
          </a>
        </div>
        <div className="p-data-down">
          <span className="p-gitup">github</span>
        </div>
        */}
      </div>

      {/*  
    <div className="p-browser">
        <div className="p-circle">1</div>
        <div className="p-circle" style={{ background: "blue" }}>
          2
        </div>
      </div>
      <a href="https://github.com/YavuzGurdal" target="_blank" rel="noreferrer">
        <img src="" alt="" className="p-img" />
      </a>
      */}
    </div>
  );
}

export default Product;
