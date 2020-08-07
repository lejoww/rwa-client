import React from 'react'

const Profile = () => {
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
                <li><a href="#" className="dropdown-item">Perfil</a></li>
                <li><a href="#" className="dropdown-item">Cerrar sesión</a></li>
            </ul>
        </div>
    )
}

export default Profile