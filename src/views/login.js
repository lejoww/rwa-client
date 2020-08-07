import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Overlay from '../components/overlay'
import zigzag from '../../static/img/textures/zigzag-lines.jpg'
import logo from '../../static/img/brand/default-monochrome-black.svg'

import axios from 'axios'

const Login = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setLogged] = useState(localStorage.getItem('authtoken') ? true : false)
    const [isWrong, setWrong] = useState(false)

    useEffect(() => {
        if (isLogged) {
            history.push('/app')
        }
    })

    const handleUsernameInput = (e) => setUsername(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const handleLogin = () => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/token-auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password
            }
        })
        .then(res => {
            setLogged(true)
        })
        .catch(err => {
            setWrong(true)
            console.log(err)
        })
    }

    return (
        <div className="container-fluid" style={{padding: 0}}>
            <div className="vw-100 vh-100 row">
                <div className={`alert alert-danger ${isWrong ? 'alert-active' : ''}`}>
                    Oops! Something's gone wrong, check your data
                </div>
                <div className="login-ad col-4 vh-100" style={{backgroundImage: `url(${zigzag})`}}></div>
                <div className="login-form col-8 d-flex align-items-center justify-content-center position-relative">
                    <div className="form-header w-100 position-absolute d-flex justify-content-between align-items-center sticky-top p-2">
                        <img className="ml-2 brand" src={logo}/>
                        <div className="registration-ad">
                            <small className="text-muted">No registered yet?</small>
                            <button className="btn btn-outline-dark ml-3">Get started</button>
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
                                autoComplete="off"
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
                        <button className="btn btn-success mt-3" onClick={handleLogin}>Continue</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login