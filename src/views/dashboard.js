import React from 'react'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import Feed from '../views/feed'
import Devices from '../views/devices'

const Dashboard = () => {
    let { path } = useRouteMatch()

    return (
        <div className="container-fluid px-0">
            <div className="row g-0">
                <Sidebar/>
                <div className="col-md-9 col-lg-10">
                    <Nav/>
                    <Switch>
                        <Route path={`${path}/feed`}>
                            <Feed/>
                        </Route>
                        <Route path={`${path}/devices`}>
                            <Devices/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard