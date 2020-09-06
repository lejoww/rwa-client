import React from 'react';

const ProgramModal = (props) => {
	return (
		<div>
			<div
				className="modal fade"
				id="programModal"
				tabIndex="-1"
				role="dialog"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content program-modal">
						<div className="modal-header">
							<div>
								<h2>{props.program.name}</h2>
								<h3 className="lead">
									The method that helps you optimize your time for several
									hours
								</h3>
							</div>
							<button className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="model-body"></div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-ghost-success"
								disabled={!props.isModifiable}
							>
								Modify
							</button>
							<button
								type="button"
								className="btn btn-success"
								data-dismiss="modal"
							>
								Start program
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgramModal;
