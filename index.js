
// var React = require("react");
import React from "react";
import "./index.css"

// var ReactDOM = require('react-dom');
import ReactDOM  from "react-dom";

var num = "num";
var ber = "ber";
var fname = "Ghoghari" ;
var lname = "nikunj" ;
const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();

var styleinline = {
    color:"red",
    marginLeft:"10px"
};

// const checkdate = new Date(2020,5,5,20).getHours();
const checkdate = new Date(2020,5,5,20).getHours();
let val = " " ;
var valsty = { } ;

if(checkdate >= 1 && checkdate < 12){
    val = "Good morning";
}else if(checkdate >= 12 && checkdate < 19 ){
    val = "Good afternoon";
}else{
    val = "Good night";
}
// for inline css we are add all property in object and specially key as well as pair value and here we are not use camlecase but we are use kabab 

// ReactDOM.render(<div><h1>Hi</h1><h2>Nik</h2></div>,document.getElementById("root"));  // after react 16 we are use this 
// ReactDOM.render([<h1>Hi</h1>,<h2>Niku</h2>],document.getElementById("root")); // first we are use this
// ReactDOM.render(<React.Fragment><h1>Hi</h1><h2>Niku</h2></React.Fragment>,document.getElementById("root"));
// ReactDOM.render(<><h1>Hi</h1><h2>Niku</h2></>,document.getElementById("root")); // this is also react fragment
ReactDOM.render(<><h1 className="hed">Hi</h1><h2 style={styleinline}>{ fname + " " + lname } you are the { `${num} ${ber}` } { 0 + 1 } person from { Math.random() } & today date is { currentdate } & current time is ................................................................................................... { currenttime }  </h2><h3 contentEditable="true">this is JSX Attributes</h3><img src="https://picsum.photos/200/300" alt="This"/><a href="https://picsum.photos/" target="_https://picsum.photos/"><img src="https://picsum.photos/200/300" alt="This"/></a><h4>{val}</h4></>,document.getElementById("root")); // if we are use javascript under html then it is expressions // we can't use condition here // we are use backtick into variable this is template literals 
// image tag is self closing tool // in a tag we are use href under target _blank or any after _ to open into new window
 
                
                <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet">
<!--just add google font link here to apply this google font-->
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

https://www.youtube.com/playlist?list=PLWiHu0b-Kgnmy0PY6wgnaVffA9ZvXB8BZ

https://www.youtube.com/playlist?list=PLrKK422S1aMma8lDA2JJjEUpC2ycuApuC
https://www.youtube.com/playlist?list=PLHRLZtgrF2jl8yqucJsMFqh5XpRLTgCI4
https://www.youtube.com/playlist?list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-
https://www.youtube.com/playlist?list=PLWPirh4EWFpHalWFs7mvo4Ui97rkDMaN9
https://www.youtube.com/playlist?list=PL7VfLVol-8kqppE6nHminF_eJGbH_MMYu
https://www.youtube.com/playlist?list=PLy_eQQ6VGZFxUup6UrQumWu4i2xmtZcwa
https://www.youtube.com/playlist?list=PL2lBQtmn82H-neMtWrKd64o-IEgqBw0Wa // English
https://www.youtube.com/playlist?list=PLRlT7xBRpp9MiMN25XJjUVz01rGFQohq2 // Hindi
https://www.youtube.com/playlist?list=PL-Jc9J83PIiHyOwS61xoGXgEbQCl_oRxv
https://www.youtube.com/playlist?list=PLk6uZK4Gpq6WmOoJfxVDYBfx-BjlThiJO
https://www.youtube.com/playlist?list=PL-Jc9J83PIiF3ujAEI8aqYg65Z0K01t-2
https://www.youtube.com/playlist?list=PLA3GkZPtsafa_yj9LoYP43oYI1tyxe_C7
https://www.youtube.com/playlist?list=PLPIwNooIb9vgfXs-QkRYqqZbDXX-yLf59
https://www.youtube.com/playlist?list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0
https://www.youtube.com/playlist?list=PLYwpaL_SFmcDFRupamGc-9zc-vQqvkQnn
https://www.youtube.com/playlist?list=PLRlT7xBRpp9MiMN25XJjUVz01rGFQohq2
https://www.youtube.com/playlist?list=PL-Jc9J83PIiG6_thChXWzolj9BEG-Y0gh
