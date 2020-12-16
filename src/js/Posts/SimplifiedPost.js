import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
	const [ state, setState ] = useState({
		id: -1,
		title: '',
		upvote: 0,
		cost: 0,
		instructions: ''
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
					<h2>{state.username}</h2>
					<h2>{state.upvote}</h2>
					<h2>{state.cost}</h2>
				</div>
			</div>
			<p>{state.instructions}</p>
		</div>
	);
};

export default withRouter(Post);
