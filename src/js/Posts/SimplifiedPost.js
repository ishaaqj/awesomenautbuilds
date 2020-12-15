import React from 'react';


class Post extends React.Component{




    render(){
        
        return(
            <div>
                <div className="User">
                    <div className="User-picture">Image inserted here</div>
                    <div className="User-info">
                        <h2>Username</h2>
                        <h2>Upvote</h2>
                        <h2>Score</h2>
                    </div>
                </div>
                <p>Some description of the user or post</p>
            </div>
        )
    }
}

export default Post;