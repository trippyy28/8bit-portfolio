import "./App.css";
import "nes.css/css/nes.min.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home";
import { Cv } from "./pages/Cv";
import Header from "./components/Header";
import { Contact } from "./pages/contact/Contact";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

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
