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
        <div className="p-circle pc-1"></div>
        <div className="p-circle pc-2"></div>
        <div className="p-circle pc-3"></div>
      </div>
      <div className="p-container">
        <img src={img} alt="" className="p-img" />
        <div className="p-data">
          <a href={link} target="_blank" className="p-link" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLink}
              size="3x"
              color="white"
              className="FontAwesomeIcon"
            />
          </a>
          <a
            href={github}
            target="_blank"
            className="p-github"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              color="white"
              className="FontAwesomeIcon"
            />
          </a>

          {/* <span className="p-gitup">github</span> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
