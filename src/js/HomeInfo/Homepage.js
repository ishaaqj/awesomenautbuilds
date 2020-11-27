import React from 'react';
import Route from 'react-router-dom';
import Banner from './Banner';
import Promo from './Promo';
import TopGuide from './TopGuide';
import FeaturedGuides from '../UserGuides/FeaturedGuides';

class HomePage extends React.Component{

    state = {
        featured: {
            user: 'Example User',
            picture: 'Null',
            reputation: 0,
            post: 'TODO: add database -> post component -> reference here by id'
        }
    }

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
                <TopGuide 
                    user={this.state.featured.user} 
                    picture={this.state.featured.picture} 
                    description={this.state.featured.post}/>
                <FeaturedGuides/>
            </div>
        )
    }
}

export default HomePage;