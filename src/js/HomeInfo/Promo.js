import React from 'react';

const Promo = (props) => {

    const promoStyling = {
        border: "solid black",
        margin: "1 rem",
        background: "black",
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        padding: "1rem",
        margin: "10px"
    }

    return (
        <div className="Promo" style={promoStyling}>
            <div className="promo-picture">{props.picture}</div>
            <div className="promo-title" style={{color: "#e2a659", fontSize: "2rem"}}>{props.title}</div>
            <div className="promo-description">{props.description}</div>
        </div>
    )
}

export default Promo;