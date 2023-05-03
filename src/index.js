import React from "react";
import  ReactDOM  from "react-dom";
import { add,sub,div,mult} from "./Cals";
import './index.css'

ReactDOM.render(
    <>
    <img src="./1.jpg"></img>
        <div>
    <ul>
        <li> sum of two no = {add (40,4)}</li>
        <li> sub of two no = {sub (50,4)}</li>
        <li> div of two no is = {div (30,4)}</li>
        <li> mult of two no is = {mult (30,4)}</li>
    </ul>
    </div>
    </>,
    document.getElementById("root")
);