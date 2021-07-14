import React from "react";

export const Cv = () => {
  return (
    <div class="container p-3 d-flex flex-column h-110 mx-auto">
      <div class="container">
        <div class="row mb-5">
          <div class="m-auto">
            <i class="nes-ash"></i>
          </div>
          <div class="col-md-9">
            <div class="nes-balloon from-left">
              <p>
                i׳m Yaniv, take a look on my CV
                <i class="nes-icon is-small heart"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <section class="nes-container is-dark with-title is-centerd mb-5">
              <p class="title">Hobbies</p>
              <div class="lists">
                <ul class="nes-list is-cicle">
                  <li>Fortnite</li>
                  <li>Beer</li>
                  <li>React.js</li>
                  <li>Ableton Live </li>
                </ul>
              </div>
            </section>
            <section class="nes-container with-title is-centerd mb-5">
              <p class="title">Languages</p>
              <div>
                <i class="nes-icon is-small heart"></i> English
              </div>
              <div>
                <i class="nes-icon is-small star"></i> Hebrew
              </div>
            </section>
            <section class="nes-container is-dark with-title is-centerd mb-5">
              <p class="title">Follow Me</p>
              <a href="https://github.com/trippyy28">
                {" "}
                <i class="nes-icon github is-large"></i>
              </a>
              <a href="https://www.linkedin.com/in/trippyy28">
                <i class="nes-icon linkedin is-large"></i>
              </a>
              <a href="https://www.instagram.com/delightful272">
                <i class="nes-icon instagram is-large"></i>
              </a>
            </section>
          </div>
          <div class="col-md-8">
            <section class="nes-container with-title mb-4">
              <p class="title">Skills</p>
              <div class="row">
                <div class="col-md-4">Html</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-warning"
                    value="85"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">Css</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-success"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">Js</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-pattern"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">React.js</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-primary"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>
            </section>
            <section class="nes-container with-title">
              <p class="title">Education</p>
              <div class="row mb-4"></div>
              <div class="col-md-8">Rimon School Of Music</div>
              <div class="col-md-4">2016-2019</div>
            </section>
            <section class="nes-container with-title mb-4">
              <p class="title">Additional Training</p>
              <div class="row">
                <div class="col-md-4">Music Making</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-warning"
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">Fortnite</div>
                <div class="col-md-8">
                  <progress
                    class="nes-progress is-success"
                    value="75"
                    max="100"
                  ></progress>
                </div>
              </div>
            </section>
            {/* <h3 class="title">
              <i class="nes-icon star is-half"></i> Job Experience
            </h3>
            <section class="nes-container mb-4 is-dark">
              <div class="row">
                <div class="col-md-10"></div>
                <h3>Old Company Name</h3>
                <p>Super Front End Developer</p>
              </div>
              <div class="col-md-2">1900-2000</div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};
