import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = (props) => {
	const [ state, setState ] = useState({
		id: -1,
		title: '',
		upvote: 0,
		cost: 0,
		instructions: ''
    });
    

    useEffect = () =>{

        const callForPost = async () =>{
            const query = await axios.get()
        }
    }
	return (
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
	);
};

export default Post;
