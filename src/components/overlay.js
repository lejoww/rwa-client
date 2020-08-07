import React from 'react'
import logo from '../../static/img/brand/default-monochrome-white.svg'

const Overlay = () => {
    return (
        <div className="overlay-container">
            <img src={logo} className="overlay-brand"/>
        </div>
    )
}

export default Overlay