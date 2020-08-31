import axiosAPI, { setNewHeaders } from './requests'

const headers = {
    'Content-Type': 'application/json'
}

export function registerUser(user) {
    return axiosAPI.post('api/v1/users/create/', {
        first_name: user.firstName,
        last_name: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password
    })
}

export function authenticateUser(username, password) {
    return axiosAPI.post('api/v1/users/token/obtain/', {
        username,
        password
    })
}

export function closeSession() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

export function refreshToken(token) {
    const response = axiosAPI.post('api/v1/users/token/refresh/', {
        token
    })
    setNewHeaders(response)
    return response
}

export function isAuthenticated() {
    const token = localStorage.getItem('access_token')
    return !!token
}