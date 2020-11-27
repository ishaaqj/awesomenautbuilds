import React from 'react';

const Promo = (props) => {
    return (
        <div>
            <div className="promo-picture">{props.picture}</div>
            <div className="promo-title">{props.title}</div>
            <div className="promo-description">{props.description}</div>
        </div>
    )
}

export default Promo;