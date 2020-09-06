import React, { useState, useEffect } from 'react';
import DeviceSelector from '../../components/device-selector'
import RachelWelcome from '../../../static/img/expressions/rachel/Welcome.png';
import RachelError from '../../../static/img/expressions/rachel/Error.png';
import RachelExcited from '../../../static/img/expressions/rachel/Excited.png';
import RachelFinishing from '../../../static/img/expressions/rachel/Finishing.png';

const LinkChecker = (props) => {
	let [step, setStep] = useState(0);
	let [currentStepImage, setCurrentStepImage] = useState(RachelWelcome);
	let images = [RachelWelcome, RachelError, RachelFinishing, RachelExcited];

	useEffect(() => {
		setCurrentStepImage(images[step]);
	});

	const handleNextStep = () => {
		setStep(step + 1);
	};

	const stepsContent = [
		<div>
			<p className="lead mr-5">
				Checkers are small programs that can be installed on any device and that
				will allow it to be analyzed when you allow it. The data we collect can
				only be used by you unless you share it, for more information
				visit&nbsp;
				<a href="#" className="link link-primary">
					RWA's Privacy Policy
				</a>
				.
			</p>
			<br />
			<button className="btn btn-primary" onClick={handleNextStep}>
				Okay, continue
			</button>
		</div>,
		<div>
			<p className="lead">
				First choose on which device you <br/>
				are going to install the checker
			</p>
			<DeviceSelector/>
		</div>,
	];

	return (
		<div className="overlay-screen bg-white">
			{/* <div className="alert alert-danger alert-active">Emmm... This function isn't available</div> */}
			<div className="row d-flex justify-content-between align-items-center">
				<div className="col">
					<img src={currentStepImage} />
				</div>
				<div className="col">{stepsContent[step]}</div>
			</div>
		</div>
	);
};

export default LinkChecker;
