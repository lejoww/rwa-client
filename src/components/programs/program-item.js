import React from 'react'

const ProgramItem = (props) => {
    return (
        <div className="bg-white program-item card mr-3 mb-3" data-toggle="modal" data-target="#programModal">
            <div className="card-body">
                <img src={props.icon} width="64"/>
                <h4 className="card-title d-flex flex-column mt-3">{props.name}</h4>
                <p className="card-text text-muted">
                    {props.abstract}
                </p>
            </div>
        </div>
    )
}

export default ProgramItem