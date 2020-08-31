import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../services/authentication'
import logo from '../../static/img/brand/default-monochrome-black.svg'
import float from '../../static/img/doodles/FloatDoodle.png'

const Register = () => {
    const history = useHistory()
    const [isWrong, setWrong] = useState(false)
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })

    const [isRegistered, setRegistered] = useState(false)

    useEffect(() => {
        if (isRegistered) {
            history.push('/dashboard/feed')
        }
    })

    const handleRegister = () => {
        registerUser(user)
        .then(response => {
            if (response != null) {
                localStorage.setItem('user', response.data)
                setRegistered(true)
            }
        })
        .catch(err => {
            throw new Error(`Register failed: ${err}`)
        })
    }

    const handleInputChange = (e) => {
        let { name } = e.target
        let { value } = e.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="container-fluid login-overflow" style={{padding: 0}}>
            <div className={`alert alert-danger ${isWrong ? 'alert-active' : ''}`}>
                Something is going wrong with the registry
            </div>
            <div className="row g-0">
                <img className="brand corner-brand mx-auto d-block" src={logo}/>

                <div className="col-md-9 d-flex justify-content-center">
                    <section className="register-form">
                        <br/>
                        <h1>Hey! Welcome</h1>
                        <div className="row mt-5">
                            <div className="col">
                                <label className="form-label">First name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    spellCheck="false" 
                                    name="firstName"
                                    onChange={handleInputChange}
                                />                            
                            </div>
                            <div className="col">                            
                                <label className="form-label">Last name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    spellCheck="false" 
                                    name="lastName"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    spellCheck="false" 
                                    name="email"
                                    onChange={handleInputChange}
                                />  
                            </div>
                            <div className="col">
                                <label className="form-label">Username</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    spellCheck="false" 
                                    name="username"
                                    onChange={handleInputChange}
                                />  
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    spellCheck="false" 
                                    name="password"
                                    onChange={handleInputChange}
                                />  
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="installerCheck" checked/>
                                    <label className="form-check-label text-muted small" for="installerCheck">
                                        Get help from the wizard to set up my account (recommended)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="termsCheck"/>
                                    <label className="form-check-label text-muted small" for="termsCheck"> 
                                        Accept the current 
                                        <a href="#" className="link-primary"> Terms and Conditions of Use </a>
                                        together with the <a href="#" className="link-primary"> Data Privacy Policies </a>
                                        posted on the RWA site
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <button className="w-100 btn btn-primary" onClick={handleRegister}>Get started now</button>
                    </section>
                </div>
                <div className="col-md-3 d-none d-md-block register-aside">
                    <img className="outstanding-doodle" src={float}/>
                </div>
            </div>
        </div>
    )
}

export default Register