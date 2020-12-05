import React from 'react';
import HomePage from '../HomeInfo/Homepage';
import {Switch, Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';


class App extends React.Component {
    render(){
        return(
            <div>
                {/* <HomePage/>
                <hr/>
                <b>TODO: delete this route for more cleaner page</b>
                <Link to={{
                    pathname: "/Awesomenauts/Admiral_Swiggins"
                }} replace>AwesomeNauts</Link> */}
                <Switch>
                    <Route path="/Awesomenauts/:id" exact component={Character}/>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;