import React from 'react';
import HomePage from '../HomeInfo/Homepage';
import {Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';


class App extends React.Component {
    render(){
        return(
            <div>
                <HomePage/>
                <Link to={{
                    pathname: "/Awesomenauts"
                }}>AwesomeNauts</Link>
                <Route path="/Awesomenauts" exact component={Character}/>
            </div>
        );
    }
}

export default App;