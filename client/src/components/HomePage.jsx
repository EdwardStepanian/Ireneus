import React from "react";
import {Card, CardTitle} from "material-ui/Card";

const HomePage = ()=> (

	<Card className = "container">
		<CardTitle
			className = 'welcomeBlock'
			title = {<h2>ireneus</h2>}
			subtitle = {
				<h4>
					<a href="https://github.com/EdwardStepanian/Ireneus">Blog by euthanasiEd</a>
				</h4>
			} />
	</Card>

);

export default HomePage;