import React from 'react'
import Profile from './profile'

const Nav = () => {
    return (
        <nav className="navbar navbar-dark sticky-top flex-md-nowrap justify-content-between px-4 py-3">
            <div>
                <input className="search-control" placeholder="Search here"/>
            </div>
            <Profile/>
        </nav>
    )
}

export default Nav