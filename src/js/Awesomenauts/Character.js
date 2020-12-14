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
            bio: "",
            // Although not strictly part of character component, nth character is stored in state to be later used inside redux store
            nCharacters: 0
    });



    useEffect (() => {
        async function getCharacterAsync() {
            // update the charcter count after the charcter data is loaded, info will most likely not change because the number of charcters is fixed. Therefore, use redux in future
            let countQuery = await axios.get('/dbcharacterCount');
            // nCharacters = countQuery.data.maxCount.max;

            let query = await axios.get(`/dbcharacter/${props.match.params.id}`);
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
                bio: queryResults.bio,
                nCharacters: countQuery.data.maxCount.max
            })
        };

        // have to make async request to database in another function and not part of useEffect strictly because of React docs; must implement nested function
        if (state.render || props.match.params.id != state.id) {
            getCharacterAsync();
        }

    })

    // Variables to change the character link based on id
    let [prev, next] = [state.id - 1, state.id + 1]

    switch(state.id){
        case 0:
            // user at first character so previous is last of character list
            prev = state.nCharacters - 1;
            break;
        case state.nCharacters -1:
            // user at last character so next is beginning of character list
            next = 0;
            break;
    }


    return (
        <div>

            <h1>{state.name}</h1>
            <p><span>Health: </span> {`${state.health.regular} (${state.health.alt})`}</p>
            <p><span>Movement: </span>{state.movement}</p>
            <p><span>Attack Type: </span>{state.attack_type}</p>
            <p><span>Role: </span>{state.role}</p>
            <p><span>Type of abilities: </span>{state.abilities.join(", ")}</p>
            {state.unlocked_level != 0 ? <p><span>Unlocked: </span> {state.unlocked_level}</p> : null}

            <p>{"\n\n"} Dynamically generated pictures of packs the character uses</p>

            <h1>{state.name}'s Bio:</h1>
            <p>{state.bio}</p>


            {/* TODO: TopGuides component but more than one */}
            <p>{"\n\n"}COMPONENT THAT TAKES DATA FROM USERS</p>
            <Link to={{pathname: `/Awesomenauts/${prev}`}}>Prev</Link>
            <br />
            <br />
            <Link to={{pathname: `/Awesomenauts/${next}`}}>Next</Link>
            <Comment />


        </div>
    );
}

export default withRouter(Character);