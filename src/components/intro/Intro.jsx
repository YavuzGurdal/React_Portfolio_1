import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is </h2>
          <h1 className="i-name"> Yavuz Gurdal </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Web developer </div>
              <div className="i-title-item"> Web designer</div>
              <div className="i-title-item"> Web dev </div>
              <div className="i-title-item"> Web design </div>
              <div className="i-title-item"> Web dvlpr </div>
            </div>
          </div>
          <div className="i-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat repellendus ipsum, tempora cumque inventore doloribus. Molestias quod tempore reprehenderit.
          </div>
        </div>
      </div>
      <div className="i-right"> right </div>
    </div>
  );
}

export default Intro;
