import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [displayVideo, setDisplayVideo] = useState("yes");
  var src = `https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1`;
  return (
    <div>
      <div className="container p-3 d-flex flex-column h-100 mx-auto m-5">
        <div className="nes-container with-title is-centered">
          <h1 className="title">
            <i className="nes-icon is-small heart"></i>About Me
            <i className="nes-icon is-small heart"></i>
          </h1>

          <p>
            Hi! my name is Yaniv. i׳m a self taught Front End Developer and a
            Music Producer!
          </p>
          <p>
            <Link to="/cv">
              <a>Learn More</a>
            </Link>
          </p>
        </div>
        <div className="d-flex flex-row m-5 justify-content-between">
          <i className="nes-smartphone"></i>
          <i class="nes-mario"></i>
          <i class="nes-ash"></i>
          <i class="nes-pokeball"></i>
          <i class="nes-bulbasaur"></i>
          <i class="nes-charmander"></i>
          <i class="nes-squirtle"></i>
          <i class="nes-kirby"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
