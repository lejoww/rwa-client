import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../static/img/brand/default-monochrome-black.svg'
import woman from '../../static/img/profile/Woman.png'
import UilHouseUser from '@iconscout/react-unicons/icons/uil-house-user'
import UilTachometerFastAlt from '@iconscout/react-unicons/icons/uil-tachometer-fast-alt'
import UilRobot from '@iconscout/react-unicons/icons/uil-robot'
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down'
import UilStopwatch from '@iconscout/react-unicons/icons/uil-stopwatch'
import UilLink from '@iconscout/react-unicons/icons/uil-link'

const Sidebar = (props) => {
    const location = useLocation()
    const path = location.pathname
    const handleItemHover = (e) => {
        e.target.classList.toggle('active-nav-link')
        e.target.childNodes[0].classList.toggle('active-icon')
    }

    const handleTopLoadingBar = () => {
        props.onChange()
    }

    const accountData = JSON.parse(localStorage.getItem('user'))
    const name = `${accountData.first_name} ${accountData.last_name}`

    return (
        <nav id="sidebar" className="sidebar-main vh-100 bg-white col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="h-100 position-sticky d-flex flex-column justify-content-between">
                <div>
                    <img className="brand sidebar-brand" src={logo}/>
                    <ul className="sidebar-nav nav flex-column w-100 py-1">
                        <li className="nav-item">
                            <Link to="">
                                <a 
                                    className={`nav-link ${path === '/' ? 'current' : ''}`}
                                    onMouseOver={handleItemHover}
                                    onMouseOut={handleItemHover}
                                    onClick={handleTopLoadingBar}
                                    >
                                    <UilHouseUser size="24" className="mr-2"/>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="programs">
                                <a 
                                    className={`nav-link ${path === '/programs' ? 'current' : ''}`}
                                    onMouseOver={handleItemHover}
                                    onMouseOut={handleItemHover}
                                    onClick={handleTopLoadingBar}
                                    >
                                    <UilStopwatch size="24" className="mr-2"/>
                                    Programs
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="devices">
                                <a 
                                    className={`nav-link ${path === '/devices' ? 'current' : ''}`}
                                    onMouseOver={handleItemHover}
                                    onMouseOut={handleItemHover}
                                    onClick={handleTopLoadingBar}
                                    >
                                    <UilLink size="24" className="mr-2"/>
                                    Checkers
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="performance">
                                <a 
                                    className="nav-link"
                                    onMouseOver={handleItemHover}
                                    onMouseOut={handleItemHover}
                                    onClick={handleTopLoadingBar}
                                >
                                    <UilTachometerFastAlt size="24" className="mr-2"/>
                                    Performance
                                    {/* yield */}
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                onMouseOver={handleItemHover}
                                onMouseOut={handleItemHover}
                                onClick={handleTopLoadingBar}
                                >
                                <UilRobot size="24" className="mr-2"/>
                                Assistant
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-profile">
                    <div className="picture-container" style={{backgroundImage: `url(${woman})`}}></div>
                    <div className="ml-3">
                        <p className="m-0 font-weight-bolder">{name}</p>
                        <p className="m-0 small" style={{opacity: .5}}>
                            View options
                            {/* <UilAngleDown className="ml-1"/> */}
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar