import React from 'react';
import { useHistory } from 'react-router-dom';
import moshingGray from '../../../static/img/doodles/MoshingDoodle-Gray.png';

const Devices = () => {
	const history = useHistory();

	return (
		<div className="p-5">
			<h1>Checkers</h1>
			<section className="device-installation-banner p-5">
				<div className="row text-center">
					<div className="col">
						<img className="mb-4" src={moshingGray} width={400} />
						<h4 className="text-muted">You don't have checkers</h4>
						<h5 className="lead text-muted">
							Add one, it's pretty easy and doesn't take more than 2 minutes.
						</h5>
					</div>
				</div>
				<div className="row justify-content-center mt-4">
					<div className="col-auto">
						<button
							className="btn btn-success mr-3"
							onClick={() => history.push('link')}
						>
							Use the installer
						</button>
						<button className="btn btn-ghost-success">Do it manually</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Devices;
