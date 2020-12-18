import React, {useState} from 'react';


const Banner = (props) =>{

    // I'm adding styling here just to make it look like a product but will implement in .css file when too complicated to add here
    const simpleStyling = {
        fontSize: "3rem",
        textAlign: "center",
        background: "black",
        paddingTop: "40px"
    }
    return (
        <div className="Banner" style={simpleStyling}>
            <span style={{color: "white"}}>Awesomenauts {"\n"}</span><span style={{color: "red"}}>Guides</span>
        </div>
    )
}

export default Banner;