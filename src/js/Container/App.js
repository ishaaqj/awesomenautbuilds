import React from 'react';
import HomePage from '../HomeInfo/Homepage';
import {Switch, Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';


class App extends React.Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/Awesomenauts/:id" exact component={Character}/>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;