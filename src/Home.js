import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="container p-3 d-flex flex-column h-100 mx-auto m-5">
        <div className="nes-container with-title is-centered">
          <h1 className="title">
            <i className="nes-icon is-small heart"></i>About Me
            <i className="nes-icon is-small heart"></i>
          </h1>

          <p>
            Hi! my name is Yaniv. i׳m a Front End Developer and a Music Producer
            !
          </p>
          <p>
            <Link to="/cv">
              <a>Learn More</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
