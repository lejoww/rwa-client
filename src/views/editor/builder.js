import React, { useState } from 'react';
import Phase from './phase';

const Builder = () => {
	let [changesSaved, setChangesSaved] = useState(false);

	const handleSaveChanges = (input) => {
		setChangesSaved(!changesSaved);
		input.blur();
		setTimeout(() => {
			setChangesSaved(!changesSaved);
		}, 2000);
	};

	return (
		<div className="vw-100 vh-100 builder overflow-hidden">
			<div
				className={`alert alert-success ${changesSaved ? 'alert-active' : ''}`}
			>
				Changes saved correctly
			</div>
			<div className="row">
				<div className="col">
					<div className="h-100 d-flex justify-content-center align-items-center">
						<Phase duration={3} />
					</div>
				</div>
				<div className="col-md-4">
					<div className="bg-white vh-100 p-4">
						<div className="d-flex">
							<input
								type="text"
								className="form-control-ghost"
								placeholder="Escribe un nombre"
								onKeyDown={(e) =>
									e.key == 'Enter' ? handleSaveChanges(e.target) : null
								}
							/>
						</div>
						<div className="builder-config">
							<label className="form-label" for="methodTypeSelector">
								Method type
							</label>
							<select
								className="form-select"
								id="methodTypeSelector"
								aria-label="Method type selector"
							>
								<option selected>Cyclic</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Builder;
