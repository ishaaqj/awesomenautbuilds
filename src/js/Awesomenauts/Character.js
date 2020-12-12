import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Comment from '../User/Comment';
import axios from 'axios';

const Character = (props) => {

    const [state, setState] = useState({
            // this render property is so the useEffect doesn't get caught in loop
            render: true,
            id: 0,
            name: "",
            health: {
                regular: 0,
                alt: 0
            },
            movement: 0,
            attack_type: "",
            role: "",
            abilities: [],
            unlocked_level: 0,
            bio: ""
    });

    useEffect (() => {
        async function getCharacterAsync() {
            const query = await axios.get(`/dbcharacter/Admiral Swiggins`);
            const queryResults = query.data.results;
            setState( {
                render: false,
                id: queryResults.id,
                name: queryResults.name,
                health:{
                    regular: queryResults.health,
                    alt: queryResults.althealth
                },
                movement: queryResults.movement,
                attack_type: queryResults.attacktype,
                role: queryResults.role,
                abilities: queryResults.abilities,
                unlocked_level: queryResults.unlockedlevel,
                bio: queryResults.bio
            })
        };

        // have to make async request to database in another function and not part of useEffect because of React docs
        if (state.render) getCharacterAsync();
    })

    // each character has an id which can be incremented or decremented for pagination.
        // max size is 3, only has 3 characters as previously
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
    if (characterIndex + 1 === characterArr.length) navigationLink.next = 0;

    //2) change indexing to only include from database
    //1) take info from database


    const charParam = characters[props.match.params.id];

    return (
        <div>

            <h1>This is from database{state.name}</h1>
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
            <Link to={{pathname: `/Awesomenauts/${characterArr[navigationLink.prev]}`}}>Prev</Link>
            <br />
            <br />
            <Link to={{pathname: `/Awesomenauts/${characterArr[navigationLink.next]}`}}>Next</Link>
            <Comment />


        </div>
    );
}

export default withRouter(Character);