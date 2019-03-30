import React from "react";
import "./style.css";

class Navbar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-default sticky-top">
            <ul>
                <li className="gameName"><a className="navbar-brand" href="/">Clicky Game</a></li>
            </ul>  
            <ul className="navbar-nav ml-auto" id="rightNav">
                <li>Score: {this.props.score}</li>
            </ul>  
        </nav>
        )
    }
}

export default Navbar;