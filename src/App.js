import React, { Fragment } from "react";
import "./App.css";
import { About, Contact, Projects, Header } from "./components";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Contact />
      <Projects />
    </Fragment>
  );
}

export default App;
