import "./App.css";
import "nes.css/css/nes.min.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home";
import { Cv } from "./pages/Cv";
import Header from "./components/Header";
import { Contact } from "./pages/contact/Contact";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import React, { useState } from "react";
function App() {
  const [displayVideo, setDisplayVideo] = useState(true);
  var src = `https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1`;
  return displayVideo ? (
    <div id="preloader">
      <div className="preload">
        <iframe src={src} frameBorder="0" height="100%" width="100%"></iframe>
      </div>
      <div className="container">
        <div className="col-md-12 mb-3">
          <progress
            class="nes-progress is-pattern"
            value="50"
            max="100"
          ></progress>
        </div>
        <div className="col-md-12 d-flex justify-content-sm-center">
          <button onClick={() => setDisplayVideo(false)} className="nes-btn">
            Skip
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center full-body">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={Cv} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
