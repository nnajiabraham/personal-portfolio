import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import CSSTypes from "../Types";
import About from "./About";
import Contributions from "./Contributions";
import Resume from "./Resume";

const routes = ["Home", "About", "Contributions", "Resume"];

const styles: CSSTypes = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  mainContent: {
    height: "95%",
  },
};
const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <NavBar routes={routes} />
        <main style={styles.mainContent}>
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/contributions">
              <Contributions />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
