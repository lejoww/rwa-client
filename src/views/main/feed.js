import React from 'react'
import { Animated } from 'react-animated-css'
import { useHistory } from 'react-router-dom'
import Greeting from '../../components/greeting'

const Feed = () => {
    const history = useHistory()

    return (
        <div className="row g-0">
            <div className="col-8">
                <div className="px-5 py-5">
                    <Greeting/>
                </div>
            </div>
        </div>
    )
}

export default Feed