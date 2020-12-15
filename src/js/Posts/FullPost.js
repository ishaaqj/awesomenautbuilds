import React from 'react';
import Comment from '../User/Comment';
import axios from 'axios';
const FullPost = (props) => {

    return (
        <div>
            <div className="MainPost">
                <div className="Header">
                    <div className="Header-Title">
                        <p>Picture(null)</p>
                        <h2>Ex: The Master Tank of Black Holes</h2>
                    </div>
                    <div className="Header-UserInfo">
                        <p>By: SomeUsername On: Null</p>
                        <div className="Header-Stats">
                            Some User statistic
                        </div>
                    </div>
                </div>

                <h2>Ex: Sentry X-58 build</h2>
                <div>List of pictures</div>
                <p>Good against - list of pictures</p>
                <p>Good with - list of pictures</p>
                <p>Bad against - list of pictures</p>
                <p>Bad With - list of pictures</p>
                <h2>Sentry X-58 Guide</h2>
                <div>
                    <p>Some description</p>
                    <ol>
                        <li>Do one thing</li>
                        <li>Do another thing</li>
                    </ol>
                </div>
                <h2>Share this Guide</h2>
                <div>Social media links</div>

                <h3>Rate this guide</h3>
            </div>
            <div className="Browse links">
                consult the previous Characters component.js for reusable code
            </div>
            <div className="Comments">
                <h1>X thoughts on "The Master Tank of Black Holes"</h1>
                <Comment/>
            </div>
        </div>
    )
}