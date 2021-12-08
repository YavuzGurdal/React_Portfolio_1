/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Product({ img, link, github }) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" style={{ backgroundColor: "red" }}></div>
        <div className="p-circle" style={{ backgroundColor: "gold" }}></div>
        <div className="p-circle" style={{ backgroundColor: "green" }}></div>
      </div>
      <div className="p-container">
        <img src={img} alt="" className="p-img" />
        <div className="p-data">
          <a href={link} target="_blank" className="p-link" rel="noreferrer">
            link
          </a>
          <FontAwesomeIcon icon={faLink} size="2x" color="white">
            {link}
          </FontAwesomeIcon>
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          <h2>
            <a
              href={github}
              target="_blank"
              className="p-gitup"
              rel="noreferrer"
            >
              GitHub
            </a>
          </h2>
          {/* <span className="p-gitup">github</span> */}
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
