import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
	const [ state, setState ] = useState({
		id: -1,
		title: 'Title not available',
		upvote: 0,
		cost: 0,
		instructions: 'Instructions not available',
		username: ''
	});

	useEffect(() => {
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

	const smallPostStyling = {
		margin: '5px'
	};

	return (
		<div style={{ border: 'solid black 2px', margin: '10px', display: 'flex', flexDirection: 'row', color: "white", background: "#222222"}}>
			<div className="User-picture" style={{ margin: '10px' }}>
				Image inserted here
			</div>
			<div className="User" style={{ display: 'flex', flexDirection: 'column' }}>
				<div className="User-info" style={{ display: 'flex', flexDirection: 'row'}}>
					<h3 style={{padding: "0px 10px 0px 0px", color: "#FBB963"}}>{state.title}</h3>
					<h4 style={{padding: "0px 10px", color: "green"}}>upvote: {state.upvote}</h4>
					<h4 style={{color: "yellow"}}>cost: {state.cost}</h4>
				</div>
				<p>{state.instructions}</p>
			</div>
		</div>
	);
};

export default withRouter(Post);
