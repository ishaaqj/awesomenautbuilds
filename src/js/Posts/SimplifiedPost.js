import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
	const [ state, setState ] = useState({
		id: -1,
		title: '',
		upvote: 0,
		cost: 0,
		instructions: '',
		username: ''
	});

	useEffect ( () => {
		const callForPost = async () => {
			// try{
			// 	if (typeof props.match === 'undefined') throw err;
			// }catch(err){
			// 	console.log(err);
			// }
			const query = await axios.get(`/dbPost/${props.id}/${props.username}/simplepost`);

			console.log(query);

			setState({
				id: query.data.posts.id,
				title: query.data.posts.title,
				upvote: query.data.posts.upvote,
				cost: query.data.posts.cost,
				instructions: query.data.posts.instructions
			});
		};
		if (state.id == -1) callForPost();
	});
	return (
		<div style={{border: 'solid black 2px'}}>
			<div className="User">
				<div className="User-picture">Image inserted here</div>
				<h3>{state.title}</h3>
				<div className="User-info">
					<h4>User: {props.username}</h4>
					<h4>upvote: {state.upvote}</h4>
					<h4>cost: {state.cost}</h4>
				</div>
			</div>
			<p>{state.instructions}</p>
		</div>
	);
};

export default withRouter(Post);
