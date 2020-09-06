import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgramItem from '../../components/programs/program-item'
import swinging from '../../../static/img/doodles/SwingingDoodle.png'

import pomodoro from '../../../static/img/icons/pomodoro.svg'
import flowtime from '../../../static/img/icons/flowtime.svg'
import action from '../../../static/img/icons/action.svg'
import eisenhower from '../../../static/img/icons/eisenhower.svg'
import gtd from '../../../static/img/icons/gtd.svg'

import ProgramModal from '../../components/programs/program-modal'
import UilSearch from '@iconscout/react-unicons/icons/uil-search'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus'

const ProgramsList = () => {
    let programs = [
        {
            name: 'Pomodoro',
            icon: pomodoro,
            abstract: 'The most beloved technique in history, focused on doing one thing at a time'
        },
        {
            name: 'Getting things done',
            icon: gtd,
            abstract: 'The science of coming up with as many ideas as quickly as possible'
        },
        {
            name: 'The action method',
            icon: action,
            abstract: 'Focused on creating clear and concrete tasks to replace detailed plans'
        },
        {
            name: 'Eisenhower',
            icon: eisenhower,
            abstract: 'A four-square table to determine what is important and what is not'
        },
        {
            name: 'Flowtime',
            icon: flowtime,
            abstract: 'The goal, find the right flow'
        }
    ]

    let [selectedProgram, setSelectedProgram] = useState({})

    const handleProgramSelection = (data) => {
        setSelectedProgram(data)
    }

    return (
        <div className="programs px-5">
            <ProgramModal program={selectedProgram}/>
            <div className="header">
                <div>
                    <div className="d-flex align-items-end">
                        <h1>Programs</h1>
                        <p>
                            <a className="link-primary ml-5">
                                <Link to="/editor/build">
                                    <UilPlus size="16"className="mr-1"/>
                                    Create a new program
                                </Link>
                            </a>
                        </p>
                    </div>
                    <div className="d-flex flex-row mt-4 align-items-center">
                        <UilSearch size="24" fill="#0D41E1" className="mr-3"/>
                        <input className="form-control-search" placeholder="Search a program here"/>
                    </div>
                </div>
                <img className="header-image" src={swinging}/>
            </div>
            <br/>
            <p className="text-uppercase small font-weight-bolder text-muted">
                Selected for you
            </p>
            <div className="w-100 d-flex flex-wrap">
                {
                    programs.map((item, i) => {
                        return ( 
                            <ProgramItem 
                                key={i}
                                icon={item.icon} 
                                name={item.name} 
                                abstract={item.abstract}
                                isModifiable={true}
                                onChangeSelectedProgram={handleProgramSelection}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProgramsList