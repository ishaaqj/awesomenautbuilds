import React from 'react';
import HomePage from '../HomeInfo/Homepage';
import {Switch, Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';
import FullPost from '../Posts/FullPost';
import SimplifiedPost from '../Posts/SimplifiedPost';


class App extends React.Component {
    render(){
        return(
            <div style={{background: "#2d2d2d", color: "#888888"}}>
                <Switch>
                    <Route path="/Awesomenauts/:id" exact component={Character}/>
                    <Route path="/Post/:id/:username" exact component ={FullPost}/>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;