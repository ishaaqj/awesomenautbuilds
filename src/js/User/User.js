import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component{


    render(){


        return(
            <div>
                Login
                <div>
                    <p>Username</p>
                    <input type="text"/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="text"/>
                </div>
                <div className="OAuth">
                    <p>List of icons</p>
                </div>
                <input type="checkbox" name="use cookies" id=""/>
                <p>Remember Me</p>
                <button>Log In</button>
                <Link>Register</Link>
                <Link>Lost Password</Link>
                
            </div>
        )
    }

}