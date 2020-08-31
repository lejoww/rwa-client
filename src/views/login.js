import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { authenticateUser } from '../services/authentication'

import logo from '../../static/img/brand/default-monochrome-black.svg'
import artboard from '../../static/img/textures/login-artboard.svg'
import axiosAPI, { setNewHeaders } from '../services/requests'

const Login = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setLogged] = useState(localStorage.getItem('access_token') ? true : false)
    const [isWrong, setWrong] = useState(false)

    const handleUsernameInput = (e) => setUsername(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    useEffect(() => {
        if (isLogged) {
            window.location.reload(false)
        }
    })

    const handleLogin = () => {
        authenticateUser(username, password)
        .then((response) => {
            setNewHeaders(response.data)
            setLogged(true)
            axiosAPI.post('api/v1/users/user/', {
                username: username
            })
            .then((account) => {
                localStorage.setItem('user', JSON.stringify(account.data))
            })
            .catch((err) => {
                setWrong(true)
                throw new Error(`Account data obtain failed: ${err}`)
            })
        })
        .catch((err) => {
            setWrong(true)
            throw new Error(`Authentication failed: ${err}`)
        })
    }

    return (
        <div className="container-fluid login-overflow" style={{padding: 0}}>
            <div className="vw-100 vh-100 row">
                <div className={`alert alert-danger ${isWrong ? 'alert-active' : ''}`}>
                    Oops! Something's gone wrong, check your data
                </div>
                <div className="login-ad col-4 vh-100 d-none d-md-block" style={{backgroundImage: `url(${artboard})`}}></div>
                <div className="login-form col-12 col-md-8 d-flex align-items-center justify-content-center position-relative">
                    <div className="form-header w-100 position-absolute d-flex justify-content-between align-items-center sticky-top p-2">
                        <img className="ml-2 brand" src={logo}/>
                        <div className="registration-ad">
                            <small className="text-muted">No registered yet?</small>
                            <button className="btn btn-dark ml-3" onClick={() => {history.push('/register')}}>
                                Get started
                            </button>
                        </div>
                    </div>
                    <section className="w-50 wrapper">
                        <div className="mb-5">
                            <h1>Welcome back 👋</h1>
                            <p className="lead">Sign in to receive you again</p>
                        </div>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                className="form-control" 
                                spellCheck="false" 
                                onChange={handleUsernameInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control"
                                onChange={handlePasswordInput}
                            />
                        </div>
                        <button className="btn btn-primary mt-3" onClick={handleLogin}>Continue</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login