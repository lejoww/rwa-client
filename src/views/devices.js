import React, { useState } from 'react'
import LinkChecker from './link-checker'
import { useHistory } from 'react-router-dom'

const Devices = () => {
    const history = useHistory()

    return (
        <div className="px-4 py-0">
            <h1>Checkers</h1>
            <section className="device-installation-banner p-5">
                <div className="row text-center">
                    <h3 className="col">How to install one?</h3>
                    <p className="lead">It is quite easy and takes no more than 2 minutes</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <button className="col-2 btn btn-success mr-3" onClick={() => history.push('link')}>Use the installer</button>
                    <button className="col-2 btn btn-ghost-success">Do it manually</button>
                </div>
            </section>
        </div>
    )
}

export default Devices