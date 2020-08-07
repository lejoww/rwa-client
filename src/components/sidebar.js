import React from 'react'
import logo from '../../static/img/brand/default-monochrome-white.svg'
import UilLaptop from '@iconscout/react-unicons/icons/uil-laptop'
import UilTachometerFastAlt from '@iconscout/react-unicons/icons/uil-tachometer-fast-alt'
import UilRobot from '@iconscout/react-unicons/icons/uil-robot'
import UilClipboardNotes from '@iconscout/react-unicons/icons/uil-clipboard-notes'

const Sidebar = () => {
    return (
        <nav id="sidebar" className="vh-100 bg-success col-md-2 d-md-block sidebar collapse">
            <div className="position-sticky py-3 px-4">
                <img className="brand" src={logo}/>
                <ul className="sidebar-nav nav flex-column w-100">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <UilLaptop color="#fff" className="mr-2"/>
                            Checkers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <UilTachometerFastAlt color="#fff" className="mr-2"/>
                            Performance
                            {/* yield */}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <UilRobot color="#fff" className="mr-2"/>
                            Assistant
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <UilClipboardNotes color="#fff" className="mr-2"/>
                            Tasks
                        </a>
                    </li>
                </ul>
                {/* <section className="fixed-bottom my-3 mx-4">
                    <h6 className="font-weight-light text-white-50 d-block m-0 p-0">
                        Remote Work Assistant <br/>
                        <small className="text-white-50">
                            © All rights reserved, 2020
                        </small>
                    </h6>
                </section> */}
            </div>
        </nav>
    )
}

export default Sidebar