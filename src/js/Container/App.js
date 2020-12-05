import React from 'react';
import HomePage from '../HomeInfo/Homepage';
import {Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';


class App extends React.Component {
    render(){
        return(
            <div>
                <HomePage/>
                <b>TODO: delete this route for more cleaner page</b>
                <Link to={{
                    pathname: "/Awesomenauts/Admiral_Swiggins"
                }}>AwesomeNauts</Link>
                {/* <Route path="/Awesomenauts" exact component={Character}/> */}
                <Route path="/Awesomenauts/:id" component={Character}/>
            </div>
        );
    }
}

export default App;