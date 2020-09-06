import React from 'react';
import swinging from '../../static/img/doodles/SwingingDoodle.png';
import axiosAPI from '../services/requests';

const Profile = () => {
	const profileData = JSON.parse(localStorage.getItem('user')).data;

	return (
		<div className="px-5 py-0">
			<div className="row">
				<div className="col-md-4">
					<section className="w-100 profile-content d-inline-block rounded border overflow-hidden">
						<div
							className="profile-cover"
							style={{ backgroundImage: `url()` }}
						>
							<div
								className="profile-image"
								style={{ backgroundImage: `url()` }}
							></div>
						</div>
						<div className="mt-5 px-3">
							<h2 className="text-center">
                                {`${profileData.first_name} ${profileData.last_name}`}
                            </h2>
							<p className="text-muted text-center mt-2">
								Developer 👨🏽‍💻 and designer 🎨. I think that the key to
								discovering the world around us is to learn something new every
								day 👀🌎
							</p>
						</div>
					</section>
				</div>
				<div className="col-md-8">
					<section className="w-100 profile-complete-ad rounded border d-inline-block overflow-hidden">
						<div className="d-flex h-100 align-items-center justify-content-between">
							<div className="p-4">
								<h3>Take a leap in your productivity</h3>
								<p className="leap">
									Let us help you improve your concentration with interesting
									mechanics to train your mind.
								</p>
								<button className="btn btn-ghost-primary">See mechanics</button>
							</div>
							<img className="ad-image" src={swinging} />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Profile;
