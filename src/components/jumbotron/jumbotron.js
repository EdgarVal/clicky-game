import React from "react";
import "./jumbo.css";

const Jumbotron = () => (
    <div className="jumbotron text-center" id="jumboPic">
        <div className="container">
            <h1 className="title display-4"><b>Bob's Burgers Battle Royale</b></h1>
            <hr></hr>
            <h2 className="lead"><b>Click on any image to earn points, but dont click on the same one more than once. Click all 12 & you win!</b></h2>
            <hr></hr>
            <h2>Click an image to begin!</h2>
        </div>
    </div>
)

export default Jumbotron;