import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { closeSession } from '../services/authentication'

const Profile = () => {
    const [isLogged, setLogged] = useState(localStorage.getItem('access_token' ? true : false))

    useEffect(() => {
        if (isLogged === false) {
            window.location.href = '/'
        }
    })

    const handleCloseSession = () => {
        closeSession()
        setLogged(false)
    }

    return (
        <div className="dropdown">
            <button 
                className="profile-button dropdown-toggle" 
                id="profileMenuButton" 
                data-toggle="dropdown" 
                aria-expanded="false"
                style={{outline: 'none'}}
            ></button>
            <ul className="dropdown-menu dropdown-menu-right position-absolute" aria-labelledby="profileMenuButton">
                <li>
                    <a className="dropdown-item" onClick={ () => history.push('profile') }>
                        Perfil
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={handleCloseSession}>
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Profile