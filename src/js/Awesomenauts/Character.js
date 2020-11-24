import React, {useState} from 'react';


const Character = (props) => {
    return (
        <div>
            <div>Example: Gnaw</div>
            <p><span>Health: </span> SomeValue from props</p>
            <p><span>Movement: </span> SomeValue from props</p>
            <p><span>Attack Type: </span> SomeValue from props</p>
            <p><span>Role: </span> SomeValue from props</p>
            <p><span>Type of abilities: </span> SomeValue from props</p>
            <p><span>Unlocked: </span> SomeValue from props</p>

            <p>{"\n\n"}POSSIBLY COMPONENT THAT USES THE CHARACTER FEATURES/PACKS</p>

            <h1>Example: Gnaw Bio</h1>
            <p>lorem ipsum</p>

            <p>{"\n\n"}COMPNENT THAT TAKES DATA FROM USERS</p>
            {/* Insert route here to other characters in order (need redux)*/}
            {/* Insert Leave comment Section */}


        </div>
    );
}