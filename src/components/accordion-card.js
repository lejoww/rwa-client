import React from 'react'
import UilCircle from '@iconscout/react-unicons/icons/uil-circle'
import UisCheckCircle from '@iconscout/react-unicons-solid/icons/uis-check-circle'

const AccordionCard = (props) => {
    return (
        <div className="card">
            <div className="card-header py-3">
                <h5 className="mb-0 step-title d-flex align-items-center">
                    {
                        props.checked ? ( 
                            <UisCheckCircle size="27" className="mr-4 step-icon"/>
                        ) : (
                            <UilCircle size="27" className="mr-4 step-icon"/>
                        )
                    }
                    <a 
                        type="button" 
                        data-toggle="collapse" 
                        data-target={`#collapse${props.identifier}`}
                        aria-expanded="true" 
                        aria-controls={`collapse${props.identifier}`}
                        className="step-button text-dark"
                    >
                        {props.title}
                    </a>
                </h5>
            </div>
            <div id={`collapse${props.identifier}`} className="collapse" data-parent="#accordion">
                <div className="card-body">
                    Esto es un mensaje x
                </div>
            </div>
        </div>
    )
}

export default AccordionCard