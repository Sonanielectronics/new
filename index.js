
// var React = require("react");
import React from "react";

// var ReactDOM = require('react-dom');
import ReactDOM  from "react-dom";

var name = "Ghoghari" ;

// ReactDOM.render(<div><h1>Hi</h1><h2>Nik</h2></div>,document.getElementById("root"));  // after react 16 we are use this 
// ReactDOM.render([<h1>Hi</h1>,<h2>Niku</h2>],document.getElementById("root")); // first we are use this
// ReactDOM.render(<React.Fragment><h1>Hi</h1><h2>Niku</h2></React.Fragment>,document.getElementById("root"));
// ReactDOM.render(<><h1>Hi</h1><h2>Niku</h2></>,document.getElementById("root")); // this is also react fragment
ReactDOM.render(<><h1>Hi</h1><h2>{name} you are the number { 0 + 1 } person from { Math.random() } </h2></>,document.getElementById("root")); // if we are use javascript under html then it is expressions // we can't use condition here
