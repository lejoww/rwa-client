import React from 'react'
import { useHistory } from 'react-router-dom'

const Feed = () => {
    const history = useHistory()
    const handleRedirection = () => {
        history.push('/app/devices')
    }

    return (
        <div>
            <button onClick={handleRedirection}>Redirect</button>
            <h1>You're in feed</h1>
        </div>
    )
}

export default Feed