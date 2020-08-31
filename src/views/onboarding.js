import React from 'react'
import logo from '../../static/img/brand/default-monochrome-black.svg'
import plant from '../../static/img/doodles/PlantDoodle.png'
import AccordionCard from '../components/accordion-card'

const OnBoarding = () => {
    return (
        <div className="container-fluid bg-white">
            <img className="brand mt-2" src={logo}/>
            <section className="onboarding-container mx-auto mt-5">
                <div className="header">
                    <h1 className="display-6">Okay, start here</h1>
                    <img className="doodle" src={plant}/>
                </div>
                <div className="onboarding-steps accordion bg-white" id="accordion">
                    <AccordionCard title="Verify your email address" checked={true} identifier="One"/>
                    <AccordionCard title="Add your first checker" checked={false} identifier="Two"/>
                    <AccordionCard title="Here other sentence" checked={false} identifier="Three"/>
                </div>
            </section>
        </div>
    )
}

export default OnBoarding