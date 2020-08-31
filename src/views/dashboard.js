import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import {
    Switch,
    Route,
    useRouteMatch,
    withRouter,
    useHistory
} from 'react-router-dom'
import Feed from '../views/feed'
import Devices from '../views/devices'
import Profile from '../views/profile'
import LoadingBar from 'react-top-loading-bar'
import LinkChecker from '../views/link-checker'
import Programs from './programs/programs-list'
import ProgramsList from './programs/programs-list'
import Measurer from '../components/measurer'

const Dashboard = () => {
    const history = useHistory()
    const [progress, setProgress] = useState(0)
    let { path } = useRouteMatch()
    console.log(path)

    // useEffect(() => {
    //     let sessionToken = handleSessionCookie('refresh-token')
    //     if (sessionToken == null) {
    //         history.push('/')
    //     }
    // })

    const handleProgress = () => {
        setProgress(100)
    }

    return (
        <div className="container-fluid px-0">
            <LoadingBar
                color="#3B60E4"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="row g-0">
                <Sidebar onChange={handleProgress} progress={progress}/>
                <div className="dashboard-main col-sm-12 col-md-9 col-lg-8">
                    <Switch>
                        <Route exact path={`/`}>
                            <Feed/>
                        </Route>
                        <Route exact path={`/devices`}>
                            <Devices/>
                        </Route>
                        <Route exact path={`/programs`}>
                            <ProgramsList/>
                        </Route>
                        <Route exact path={`/link`}>
                            <LinkChecker/>
                        </Route>
                        <Route exact path={`/profile`}>
                            <Profile/>
                        </Route>
                    </Switch>
                </div>
                <div className="col-lg-2">
                    <Measurer/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)