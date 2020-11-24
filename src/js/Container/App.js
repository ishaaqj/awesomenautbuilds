import React from 'react';
import Banner from './Banner';
import {Route} from 'react-router-dom';


class App extends React.Component {
    render(){
        return(
            <div>
                <Banner/>
                <Route path="/Awesomenauts" component/>
            </div>
        );
    }
}

export default App;