import React from "react";

export const Contact = () => {
  return (
    <div class="container p-3 d-flex flex-column h-110 mx-auto">
      <div class="container nes-container with-title mb-4">
        <p class="title">Contact Me</p>
        <div class="row">
          <div class="col md-12">
            <form action="" class="form-horizontal">
              <div class="nes-balloon from-left">
                <legend class="text-center mb-4">
                  Send Message or link on social media
                </legend>
              </div>
              <div class="form-group">
                <label for="name" class="col-md-3 control-label">
                  Name
                </label>
                <div class="offset-md-2 col-md-8">
                  <input
                    type="text"
                    id="name"
                    placeholder="your name"
                    class="form-control nes-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-md-3 control-label">
                  Email
                </label>
                <div class="offset-md-2 col-md-8">
                  <input
                    type="email"
                    id="email"
                    placeholder="your email"
                    class="form-control nes-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="message" class="col-md-3 control-label">
                  Your Message
                </label>
                <div class="offset-md-2 col-md-8">
                  <textarea
                    rows="5"
                    type="message"
                    id="message"
                    placeholder="Please Enter your message!"
                    class="form-control nes-input"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <button type="submit" class="nes-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section class="nes-container is-centered with-title md-4">
        <p class="title">Social Media</p>
        <div class="icon-list">
          <a href="https://twitter.com/trippyymu">
            <i class="nes-icon twitter is-large"></i>
          </a>
          <a href="https://www.facebook.com/Yaniv.Hershkowitz/">
            <i class="nes-icon facebook is-large"></i>
          </a>
          <a href="https://www.instagram.com/delightful272/">
            <i class="nes-icon instagram is-large"></i>
          </a>
          <a href="https://github.com/trippyy28">
            <i class="nes-icon github is-large"></i>
          </a>
          <a href="https://www.linkedin.com/in/trippyy28/">
            <i class="nes-icon linkedin is-large"></i>
          </a>
          <a href="https://www.twitch.tv/trippyymusic">
            <i class="nes-icon twitch is-large"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCBijNZ7w3IFp6tIf3m9ELJA">
            <i class="nes-icon youtube is-large"></i>
          </a>
        </div>
      </section>
    </div>
  );
};
