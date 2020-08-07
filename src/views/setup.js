import React from 'react'
import { Animated } from 'react-animated-css'
import badge from '../../static/img/icons/badge.png'

const Setup = () => {
    return (
        <div className="container">
            <div className="row vh-100 d-flex justify-content-center align-items-center">
                <section className="col-md-6 col-sm-12 p-4 text-center">
                    <Animated animationIn="fadeInUp" isVisible={true}>
                    <img className="icon" src={badge}/>
                        <h1 className="mt-5">We will set up certain details of your account</h1>
                        <h6 className="font-weight-light">Detects nearby distractions.</h6>

                        <aside className="mt-5">                        
                            <select class="form-select mb-3" aria-label=".form-select-lg example">
                                <option selected>Select one</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </aside>
                    </Animated>
                </section>
            </div>
        </div>
    )
}

export default Setup