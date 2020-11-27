import React from 'react';

const TopGuide = (props) => {
    return (
        <div class="featured" style={{border: "solid black"}}>
            <h3>Top Guide</h3>
            <div className="featuredUser">{props.user}</div>
            <div className="featuredPicture">{props.picture}</div>
            {/* TODO: This description will have to be a post that corresponds to some id in Database and not generated here */}
            <div className="featuredDescription">{props.description}</div>
        </div>
    )
};

export default TopGuide;