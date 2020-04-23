import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { About, Contact, Projects, Header, Landing } from "./components";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Landing />
      <About />
      <Contact />
      <Projects />
    </Fragment>
  );
}

export default App;
