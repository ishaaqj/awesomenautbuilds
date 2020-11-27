import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class FeaturedGuides extends React.Component{

    render(){
        

        return(
            <div>
                <h2>Awesomenauts Guides</h2>
                <p>Select an Awesomnaut below to see meta and guides</p>
                <div>List of Awesomenaut character pictures with clickable to character page (i.e. Aweomenauts/Character.js)</div>
                <p>remember you can <Link>submit</Link> your own <b>Awesomenauts guide.</b> It's easy and won't take much time!</p>

                <h2>Latest Awesomenauts Guides</h2>
                {/* TODO: inser the generated list of awesomenaut guides from database */}
                <p>Insert generated list of posts here</p>

            </div>

        )
    }
}

export default withRouter(FeaturedGuides);