import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both', 'backgroundColor': '#cccccc'}} className="jumbotron">
    <h1 className = "text-center">NEW YORK TIMES ARTICLES</h1>
    {children}
  </div>;

export default Jumbotron;
