import React from 'react';
import Banner from './Banner';
import Promo from './Promo';
import SimplifiedPost from '../Posts/SimplifiedPost';
import FeaturedGuides from '../User/UserGuides/FeaturedGuides';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	state = {
		featured: {
			user: 'Example User',
			picture: 'Null',
			reputation: 0,
			post: 'TODO: add database -> post component -> reference here by id'
		}
	};

	render() {
		const promoInfo = [
			{
				title: 'Register Now!',
				picture: 'null',
				description:
					'Registered users can leave comments and submit own guides. Moreover, you will see less advertisement on the website'
			},
			{
				title: 'Submit you guides',
				picture: 'null',
				description:
					'Do you think you know how to play Awesomenauts better? Share your own guide with the community and earn rewards'
			},
			{
				title: 'Top guides',
				picture: 'null',
				description: 'Try out Awesomenauts guides with the highest ratings selected by our community'
			}
		];
		return (
			<div className="Homepage">
				<Banner />
				<Link to="/Awesomenauts/0">Admiral Swiggins Characternaut </Link>
				<br />
				<br />
				<Link to="/Post/0/asd">First Ever Post</Link>
				<div className="Promotional" style={{display: "flex", flexDirection: "row"}}>
					{promoInfo.map((el) => {
						return <Promo picture={el.picture} title={el.title} description={el.description} />;
					})}
				</div>
				<h2>Random Guide</h2>
				<SimplifiedPost id="0" username="asd" />
				<FeaturedGuides />
				<SimplifiedPost id="0" username="asd" />
			</div>
		);
	}
}

export default HomePage;
