import React from 'react';
import Route from 'react-router-dom';
import Banner from './Banner';
import Promo from './Promo';


class HomePage extends React.Component{
    render(){

        return(
            <div className="Homepage">
                <Banner/>
                <Promo picture="null" title="example Title" description="example Description"/>
            </div>
        )
    }
}

export default HomePage;