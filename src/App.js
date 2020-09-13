import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LyricNavbar from "./components/navbar/lyricNavbar";
import { Provider } from "./components/context/context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Index } from "./components/Index";
import Lyrics from "./components/searchResult/Lyrics";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <LyricNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
