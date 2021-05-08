import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Atharva from "./pages/Atharva";
import Sangita from "./pages/Sangita";
import Naimish from "./pages/Naimish";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Atharva />
          </Route>
          <Route path="/sangita">
            <Sangita />
          </Route>

          <Route path="/naimish">
            <Naimish />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
