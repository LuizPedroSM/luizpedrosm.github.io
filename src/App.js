import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { About, Contact, Projects, Header } from "./components";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <About />
      <Contact />
      <Projects />
    </Fragment>
  );
}

export default App;
