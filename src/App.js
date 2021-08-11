import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header";
import "./content/crypto-table/crypto-table.css";
import Content from "./content/content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./content/coin/coin";
import CryptoTable from "./content/crypto-table/crypto-table";
import About from "./content/about/about";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/:id" children={<Coin />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
