import React from 'react';

const Promo = (props) => {
    return (
        <div class="Promo" style={{border: "solid black", margin: "1rem"}}>
            <div className="promo-picture">{props.picture}</div>
            <div className="promo-title">{props.title}</div>
            <div className="promo-description">{props.description}</div>
        </div>
    )
}

export default Promo;