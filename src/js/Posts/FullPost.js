import React from 'react';
import Comment from '../User/Comment';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class FullPost extends React.Component {


    state = {
        id: -1,
        watchCount: 0,
        upvote: 0,
		cost: 0,
		username: '',
		buildName: '',
		date: 'yyyy-mm-dd',
		instructions: ''
    }

    componentDidMount(){

		// This will only be executed once so it is more appropriate to use Async calls in this instead of componentDidUpdate()
		// No need for verification because it's rendered once
		axios.get(`/dbPost/${this.props.match.params.id}/${this.props.match.params.username}`).then(res => {
			let query = res.data.posts;
			this.setState({
				id: query.id,
				watchCount: query.watchcount,
				upvote: query.upvote,
				cost: query.cost,
				username: query.username,
				buildName: query.buildname,
				// Uses regular expression to split string and then since it returns an array, join the array to make a single string again
				date: query.date.match(/\d{4}-\d{2}-\d{2}/g).join(""),
				instructions: query.instructions
			})
		}).catch(err => {console.log(err)});

    }
	render() {
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
							<div className="Header-Stats">Some User statistic</div>
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
				<div className="Browse links">consult the previous Characters component.js for reusable code</div>
				<div className="Comments">
					<h1>X thoughts on "The Master Tank of Black Holes"</h1>
					<Comment />
				</div>
			</div>
		);
	}
}

export default withRouter(FullPost);