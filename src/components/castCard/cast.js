import React from "react";
import "./castCard.css";

const CastCard = props => (

    <div className="card" onClick={props.clickedCharacter}>
        <div className="card-body">
                <img id="pic" alt={props.image} src={props.image}/>
        </div>
    </div>
    )

export default CastCard;