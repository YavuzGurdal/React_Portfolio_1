import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext); // useContext le contex ten gelen ThemeContext i theme e atiyoruz

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" }); // context ten gelen dispatch i burda kullaniyoruz
    // context te action type TOGGLE dedigimiz icin burda o sekilde kullaniyoruz. bu sekilde context te action type TOGGLE olan islevi yapmis oluyoruz
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
