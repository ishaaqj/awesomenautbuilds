import React from 'react';
import Route from 'react-router-dom';
import Banner from './Banner';
import Promo from './Promo';


class HomePage extends React.Component{

    render(){
        const promoInfo = [
            {
                title: "Register Now!",
                picture: "null",
                description: "Registered users can leave comments and submit own guides. Moreover, you will see less advertisement on the website"
            },
            {
                title: "Submit you guides",
                picture: "null",
                description: "Do you think you know how to play Awesomenauts better? Share your own guide with the community and earn rewards"
            },
            {
                title: "Top guides",
                picture: "null",
                description: "Try out Awesomenauts guides with the highest ratings selected by our community"
            }
        ];
        return(
            <div className="Homepage">
                <Banner/>
                {promoInfo.map(el => {
                    return <Promo picture={el.picture} title={el.title} description={el.description}/>
                })}
            </div>
        )
    }
}

export default HomePage;