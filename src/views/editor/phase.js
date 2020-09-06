import React from 'react';
import UilStopwatch from '@iconscout/react-unicons/icons/uil-stopwatch';

const Phase = (props) => {
	return (
		<div className="bg-white rounded phase">
			<div>
				<div className="d-flex justify-content-between mb-4">
					<h3>Phase 1</h3>
					<span className="phase-type">
						<UilStopwatch size="19" />
						Timer
					</span>
				</div>
                <div>
                    <label for="phasePurpose" className="form-label">
                        What is the purpose of this phase?
                    </label>
                    <input type="text" className="form-control" id="phasePurpose" />
                </div>
                <div className="mt-4">
                    <label for="phasePurpose" className="form-label">
                        Duration
                    </label>
                    <div className="row">
                        <div className="col">
                            <select className="form-select">
                                <option default>00</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select">
                                <option default>00</option>
                            </select>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Phase;
