import React from 'react'
import running from '../../static/img/doodles/RunningDoodle.png'

const Measurer = () => {
    return (
        <div className="measurer-container bg-primary w-100 vh-100 d-flex flex-column align-items-center justify-content-center px-4 py-5">
            {/* <img src={running} width="200"/> */}
            <div className="spinner"></div>
            <aside className="mt-3">
                <h3 className="display-6 text-center text-white">Decided to start right now?</h3>
                <button className="mx-auto d-block btn btn-dark mt-5">Yep, start now</button>
            </aside>
        </div>
    )
}

export default Measurer