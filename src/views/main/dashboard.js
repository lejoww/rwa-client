import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import {
	Switch,
	Route,
	useRouteMatch,
	withRouter,
	useHistory,
} from 'react-router-dom';
import Feed from '../main/feed';
import Devices from '../checkers/checkers';
import Profile from '../profile';
import LoadingBar from 'react-top-loading-bar';
import LinkChecker from '../checkers/link-checker';
import ProgramsList from '../programs/programs-list';
import Measurer from '../../components/measurer';
import MeasurerStart from '../measurer/measurer-start';
import Builder from '../editor/builder';

const Dashboard = () => {
	const history = useHistory();
	let { path } = useRouteMatch();
	const [progress, setProgress] = useState(0);

	// useEffect(() => {
	//     let sessionToken = handleSessionCookie('refresh-token')
	//     if (sessionToken == null) {
	//         history.push('/')
	//     }
	// })

	const handleProgress = () => {
		setProgress(100);
	};

	return (
		<div className="container-fluid px-0">
			<LoadingBar
				color="#3B60E4"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<div className="row g-0">
				<Sidebar onChange={handleProgress} progress={progress} />
				<div className="dashboard-main col-sm-12 'col-md-9 col-lg-8">
					<Switch>
						<Route exact path={`/`}>
							<Feed />
						</Route>
						<Route exact path={`/devices`}>
							<Devices />
						</Route>
						<Route exact path={`/programs`}>
							<ProgramsList />
						</Route>
						<Route exact path={`/link`}>
							<LinkChecker />
						</Route>
						<Route exact path={`/profile`}>
							<Profile />
						</Route>
						<Route exact path={`/editor/build`}>
							<Builder />
						</Route>
						<Route exact path={`/measurer/start`}>
							<MeasurerStart />
						</Route>
					</Switch>
				</div>
				<div className="col-lg-2">
					<Measurer />
				</div>
			</div>
		</div>
	);
};

export default withRouter(Dashboard);
