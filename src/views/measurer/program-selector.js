import React from 'react';
import ProgramSelectorItem from './program-selector-item';

const ProgramSelector = () => {
	return (
		<div className="program-selector">
			<h2 className="text-white text-center">Choose a program</h2>
			<p className="text-white-50 text-center">
				The programs are made to control the pattern during the session.
			</p>
			<br />
			<div className="w-100 bg-white rounded p-2">
				<ul className="program-list">
					<ProgramSelectorItem name="Pomodoro"/>
                    <ProgramSelectorItem name="Flowtime"/>
                    <ProgramSelectorItem name="Getting things done"/>
                    <ProgramSelectorItem name="Eisenhower"/>
				</ul>
			</div>
		</div>
	);
};

export default ProgramSelector;
