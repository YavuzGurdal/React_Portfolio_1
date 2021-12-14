import React, { useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com"; // email icin
import { useState } from "react";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef(); //  burasi onemli
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // formu gonderince sayfa yanilenmesin diye

    emailjs
      .sendForm(
        "service_archprc",
        "template_hve0rot",
        formRef.current,
        "user_qiSwo0c05PPc5uDiAyKY9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useContext(ThemeContext); // useContext le contex ten gelen ThemeContext i theme e atiyoruz

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +49 123456
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              yvzwebdev@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              52396 Heimbach
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              required="required"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="email"
              required="required"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              required="required"
              placeholder="Message"
              name="message"
              rows="5"
            ></textarea>
            <button>Submit</button>
            {done && "  Your Message recived"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
