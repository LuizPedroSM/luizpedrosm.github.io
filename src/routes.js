import React from "react";
import {  Route, Switch, HashRouter } from "react-router-dom";
import {
  About,
  Contacts,
  Projects,
  Header,
  Landing,
  Resume
} from "./components";
export default function Routes() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </HashRouter>
  );
}
