import React, { useState } from "react";
import emailjs from "emailjs-com";

const Container = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku8xy6k",
        "template_zxwhczq",
        e.target,
        "user_doQIk315T5vjvtjFnz3je"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <div className="container nes-container with-title mb-4">
        <p className="title">Contact Me</p>
        <div className="row">
          <div className="col md-12">
            <form action="" className="form-horizontal" onSubmit={sendEmail}>
              <div className="nes-balloon from-left">
                <legend className="text-center mb-4">
                  Send Message or link on social media
                </legend>
              </div>
              <div className="form-group">
                <label for="name" className="col-md-3 control-label">
                  Name
                </label>
                <div className="offset-md-2 col-md-8">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your name"
                    className="form-control nes-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-md-3 control-label">
                  Email
                </label>
                <div className="offset-md-2 col-md-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email"
                    className="form-control nes-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="message" className="col-md-3 control-label">
                  Your Message
                </label>
                <div className="offset-md-2 col-md-8">
                  <textarea
                    rows="5"
                    name="message"
                    type="message"
                    id="message"
                    placeholder="Please Enter your message!"
                    className="form-control nes-input"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <button type="submit" className="nes-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;