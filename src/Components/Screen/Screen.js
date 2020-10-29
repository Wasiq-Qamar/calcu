import React from "react";
import CompScreen from "./CompScreen.js";
import ResultScreen from "./ResultScreen.js";
import ErrorScreen from "./ErrorScreen.js";

const Screen = (props) => (
  <section className="screen">
    <ErrorScreen>{props.error}</ErrorScreen>
    <ResultScreen>{props.result}</ResultScreen>
    <CompScreen>{props.equation}</CompScreen>
  </section>
);

export default Screen;
