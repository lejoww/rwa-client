import React from 'react'
import ProgramSelector from './program-selector'

const MeasurerStart = () => {
    return (
        <div className="measurer-window vw-100 vh-100 bg-primary">
            <div className="spinner"></div>
            <br/>
            <ProgramSelector/>
        </div>
    )
}

export default MeasurerStart