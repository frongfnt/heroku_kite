import React from "react";
import App5 from "./Fl5.js";
import App7 from "./Fl7.js";
import App6 from "./Fl6.js";
import Basic from "./Basic.js";
import All from "./All.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand"> 
            KITE V.3
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/Basic">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Show
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/Basic">
                    Basic
                  </a>
                  <a className="dropdown-item" href="/All">
                    All
                  </a>
                  <a className="dropdown-item" href="/Fl5">
                    FL.5
                  </a>
                  <a className="dropdown-item" href="/Fl6">
                    FL.6
                  </a>
                  <a className="dropdown-item" href="/Fl7">
                    FL.7
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/all">
            <All />
          </Route>
          <Route path="/fl5">
            <App5 />
          </Route>
          <Route path="/fl6">
            <App6 />
          </Route>
          <Route path="/fl7">
            <App7 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function basic() {
  return <h2>{Basic}</h2>;
}

function all() {
  return <h2>{All}</h2>;
}

function fl5() {
  return <h2>{App5}</h2>;
}

function fl6() {
  return <h2>{App6}</h2>;
}

function fl7() {
  return <h2>{App7}</h2>;
}
