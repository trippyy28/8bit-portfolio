import "./App.css";
import "nes.css/css/nes.min.css";
import Portfolio from "./Portfolio";
import Home from "./Home";
import { Cv } from "./Cv";
import Header from "./Header";
import { Contact } from "./Contact";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
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
