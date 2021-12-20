import React from "react";
import "./about.css";
import Aboutme from "../../img/about-me.jpeg";
// import Award from "../../img/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            // src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            src={Aboutme}
            alt="About me"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right-wrapper">
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Too long for me too short for you.
          </p>
          <p className="a-desc">
            I am a person who is open to learning new things. It's always been my dream to be a software developer. I made a radical change in my life and became a software developer. Now I live in a new country, learned a new language and became a software developer. As a person who is open to innovations, I continue to learn new things...
          </p>
          {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
