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
            unlocked_level: 0,
            bio: "lorem ipsum lol"
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
            unlocked_level: 18,
            bio: "lorem ipsum lol"
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
            unlocked_level: 3,
            bio: "lorem ipsum lol"
        }
    }
    const characterArr = Object.keys(characters);
    const characterIndex = characterArr.indexOf(props.match.params.id);

    // Values to to link for routing to prev and next character
    // Take case of prev and next link before if statement corrects for cases
    let navigationLink = {prev: characterIndex - 1, next: characterIndex + 1}
    // case: current index is first page in which case, go to last page
    if (characterIndex === 0) navigationLink.prev = characterArr.length -1;
    // case: current index is last page so go to first page
    if (characterIndex === characterArr.length) navigationLink.next = 0;



    const charParam = characters[props.match.params.id];

    return (
        <div>

            <h1>{charParam.name}</h1>
            <p><span>Health: </span> {`${charParam.health.regular} (${charParam.health.alt})`}</p>
            <p><span>Movement: </span>{charParam.movement}</p>
            <p><span>Attack Type: </span>{charParam.attack_type}</p>
            <p><span>Role: </span>{charParam.role}</p>
            <p><span>Type of abilities: </span>{charParam.abilities.join(", ")}</p>
            {charParam.unlocked_level != 0 ? <p><span>Unlocked: </span> {charParam.unlocked_level}</p> : null}

            <p>{"\n\n"} Dynamically generated pictures of packs the character uses</p>

            <h1>{charParam.name}'s Bio:</h1>
            <p>{charParam.bio}</p>


            {/* TODO: TopGuides component but more than one */}
            <p>{"\n\n"}COMPONENT THAT TAKES DATA FROM USERS</p>
            {/* TODO: Insert route here to other characters in order (need redux)*/}
            {/* TODO: First serach for character then output links accordingly */}
            {/* TODO: Two links to link to other character */}
            {/* TODO: Insert Leave comment Section */}
            <Link to={{pathname: `/Awesomenauts/${characterArr[navigationLink.prev]}`}}>Prev</Link>
            <br />
            <br />
            <Link to={{pathname: `/Awesomenauts/${characterArr[navigationLink.next]}`}}>Next</Link>


        </div>
    );
}

export default withRouter(Character);