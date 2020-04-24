import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  About,
  Contact,
  Projects,
  Header,
  Landing,
  Resume
} from "./components";
export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
