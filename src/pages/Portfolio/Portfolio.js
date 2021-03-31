import React, { useState } from "react";
import Cabin from "./img/portfolio/cabin.png";
import Cake from "./img/portfolio/cake.png";
import Circus from "./img/portfolio/circus.png";
import Game from "./img/portfolio/game.png";
import Safe from "./img/portfolio/safe.png";
import Submarine from "./img/portfolio/submarine.png";
import Dj from "./pics/dj.png";
const Portfolio = () => {
  const [img, setImg] = useState("all");
  return (
    <div className="container p-3 d-flex flex-column h-150 mx-auto">
      <div className="container nes-container mb-4">
        <div className="col-md-12">
          <h1 className="d-flex justify-content-center">Gallery</h1>
        </div>
        <div className="col-md-12 mb-4">
          <button
            onClick={(e) => setImg("movie")}
            type="button"
            className="nes-btn"
          >
            Movie-Search
          </button>
          <button
            onClick={(e) => setImg("dj")}
            type="button"
            className="nes-btn is-warning"
          >
            Dj-Filter
          </button>
          <button
            onClick={(e) => setImg("ts")}
            type="button"
            className="nes-btn is-error"
          >
            TrippySamples
          </button>
          <button
            onClick={(e) => setImg("all")}
            type="button"
            className="nes-btn is-success"
          >
            All
          </button>
        </div>
        <div className="row mb-4">
          <div className="m-auto nes-pointer col-md-4">
            {img == "movie" ? (
              <a href="https://trippyy28.github.io/Movie-Search/">
                <img src={Safe} className="img-responsive" alt="" />
                <p>Small app for searching movie using React Hooks and Api</p>
              </a>
            ) : null}
            {img == "dj" ? (
              <a href="https://trippyy28.github.io/ArtistScFinder/">
                <img src={Circus} className="img-responsive" alt="" />
                <p>Nice Small React App for searching your favoirte dj!</p>
              </a>
            ) : null}
            {img == "ts" ? (
              <a href="https://trippyy28.github.io/trippyysamplesdemo/">
                <img src={Game} className="img-responsive" alt="" />
                <p>
                  My Personal Sample Pack E-commerce website (Still in
                  progress!)
                </p>
              </a>
            ) : null}
            {img == "all" ? (
              <div>
                <a href="https://trippyy28.github.io/ArtistScFinder/">
                  <img src={Circus} className="img-responsive" alt="" />
                  <p>Dj Filter</p>
                </a>
                <a href="https://trippyy28.github.io/trippyysamplesdemo/">
                  <img src={Game} className="img-responsive" alt="" />
                  <p>Trippy Samples</p>
                </a>
                <a href="https://trippyy28.github.io/Movie-Search/">
                  <img src={Safe} className="img-responsive" alt="" />
                  <p>Movie-Search</p>
                </a>
              </div>
            ) : null}
            <p>Just Click The Picture!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
