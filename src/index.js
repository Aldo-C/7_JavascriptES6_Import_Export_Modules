import React from "react";
import ReactDOM from "react-dom";
// When importing a default it is not necessary to use the function or element name, so this could be import farts and it would still work
//  but non-default import names must match the function names
//  Note that these are called as function with ()
import pedos, { doublePi, triplePi } from "./math";

// Another way to import everything in a file is to use:
//  import * as <name> from "./math";
// Then call as:
//  <name>.default
//  <name>.doublePi()
//  <name>.triplePi()

ReactDOM.render(
  <ul>
    <li>{pedos}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
