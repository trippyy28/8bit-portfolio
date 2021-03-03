import React, { useState } from "react";

const Container = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  return (
    <div>
      <div className="container nes-container with-title mb-4">
        <p className="title">Contact Me</p>
        <div className="row">
          <div className="col md-12">
            <form action="" className="form-horizontal">
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
                    placeholder="your name"
                    className="form-control nes-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder="your email"
                    className="form-control nes-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="message"
                    id="message"
                    placeholder="Please Enter your message!"
                    className="form-control nes-input"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
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
