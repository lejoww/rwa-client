import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import moment from 'moment';

const Greeting = () => {
	const currentTime = moment().format('A');

	const accountData = localStorage.getItem('user');
	const nickname = JSON.parse(accountData).first_name;

	return (
		<div>
			<Animated animationIn="fadeInUp" isVisible={true}>
				<h1>
					{`${currentTime.toLowerCase() == 'am'
						? 'Good morning'
						: 'Good afternoon'}, ${nickname}`}
				</h1>
			</Animated>
		</div>
	);
};

export default Greeting;
