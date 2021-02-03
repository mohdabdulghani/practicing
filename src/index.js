import React from "react";

import ReactDom from "react-dom";
import "./index.css"

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};
if(curDate >= 1 && curDate <13){
    greeting = 'Good Morning'
    cssStyle.color = 'blue'
}else if(curDate > 12 && curDate <19){
    greeting = 'Good AfterNoon'
    cssStyle.color = 'green'
}else{
    greeting = 'Good Night';
    cssStyle.color = 'red'
}

ReactDom.render(
    <>
    <div>
<h1> <span style = {cssStyle}> {greeting} </span> Mr.Abdul</h1>
</div>
</>,
    document.getElementById("root"));









