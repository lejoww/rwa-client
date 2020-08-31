import React from 'react'
import selfie from '../../static/img/doodles/SelfieDoodle.png'
import { Animated } from 'react-animated-css'

const LinkChecker = (props) => {
    return (
        <div className="overlay-screen bg-white bg-gradient row vh-100">
            {/* <div className="alert alert-danger alert-active">Emmm... This function isn't available</div> */}
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                    <img src={selfie} style={{width: '100%'}}/>
                </div>
                <div className="col-md-6">
                    <h2>Install your checkers</h2>
                </div>
            </div>
        </div>
    )
}

export default LinkChecker