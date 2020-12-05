import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';


const Character = (props) => {
    const characters = {
        Admiral_Swiggins: {
            name: "Admiral Swiggins",
            health: {
                regular: 1500,
                alt: 1950
            },
            movement: 7.2,
            attack_type: "Melee",
            role: "Initiator",
            abilities: [ 'Stun', 'Blind', 'Shield', 'Damage Over Time', 'Area of Effect' ],
            unlocked_level: 0
        },
        Ayla: {
            name: "Ayla",
            health: {
                regular: 1300,
                alt: 1690
            },
            movement: 7.6,
            attack_type: "Melee",
            role: "Brawler",
            abilities: [
                'Area of Effect',
                'Damage Over Time',
                'Fly',
                'Lifesteal',
                'Shield',
                'Slow'
              ],
            unlocked_level: 18
        },
        Clunk: {
            name: "Clunk",
            health: {
                regular: 1900,
                alt: 2470
            },
            movement: 7.6,
            attack_type: "Medium",
            role: "Tank",
            abilities: [ 'Lifesteal', 'Area of effect', 'Ensnare', 'Slow', 'Launch String' ],
            unlocked_level: 3
        }
    }
    // For now put information of characters like health, movement etc. in client side. Later in postgres
    return (
        // Props: name -> abilities, bio, health etc.
        <div>
            <h1>Example: Gnaw</h1>
            <p><span>Health: </span> SomeValue from props</p>
            <p><span>Movement: </span> SomeValue from props</p>
            <p><span>Attack Type: </span> SomeValue from props</p>
            <p><span>Role: </span> SomeValue from props</p>
            <p><span>Type of abilities: </span> SomeValue from props</p>
            <p><span>Unlocked: </span> SomeValue from props</p>

            <p>{"\n\n"}POSSIBLY COMPONENT THAT USES THE CHARACTER FEATURES/PACKS</p>

            <h1>Example: Gnaw Bio</h1>
            <p>lorem ipsum</p>


            {/* TopGuides component but more than one */}
            <p>{"\n\n"}COMPNENT THAT TAKES DATA FROM USERS</p>
            {/* Insert route here to other characters in order (need redux)*/}
            {/* Insert Leave comment Section */}
            {/* First serach for character then output links accordingly */}
            {/* Two links to link to other character */}

        </div>
    );
}

export default withRouter(Character);