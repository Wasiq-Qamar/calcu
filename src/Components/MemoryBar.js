import React from "react";

const MemoryBar = (props) => (
  <div>
    <div className="memory-bar">{props.equation}</div>
    <div className="memory-bar">= {props.result}</div>
    <hr />
  </div>
);

export default MemoryBar;
