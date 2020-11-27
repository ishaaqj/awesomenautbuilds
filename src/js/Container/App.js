import React from 'react';
import Banner from './Banner';
import {Route, Link} from 'react-router-dom';
import Character from '../Awesomenauts/Character';


class App extends React.Component {
    render(){
        return(
            <div>
                <Banner/>
                <Link to={{
                    pathname: "/Awesomenauts"
                }}>AwesomeNauts</Link>
                <Route path="/Awesomenauts" exact component={Character}/>
            </div>
        );
    }
}

export default App;