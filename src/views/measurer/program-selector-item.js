import React from 'react'
import ProgramSelector from './program-selector'

const ProgramSelectorItem = (props) => {
    return (
        <li className="program-list-item">
            <a href="#">
                {props.name}
            </a>
        </li>
    )
}

export default ProgramSelectorItem