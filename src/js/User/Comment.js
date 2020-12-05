import React from 'react';


class Comment extends React.Component{
    state = {
        loggedIn: false
    }

    render(){
        return(

            <div>
                <h1>Leave a comment</h1>
                {this.state.logegedIn ? <p>coming soon</p> : <p>you must be <a href="#">logged in</a> to post a comment.</p>}
            </div>
        )
    }
}

export default Comment;