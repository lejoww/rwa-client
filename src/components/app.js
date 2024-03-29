import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Login from '../views/login'
import Register from '../views/register'
import Dashboard from '../views/main/dashboard'
import OnBoarding from '../views/onboarding'

const App = () => {
    const token = localStorage.getItem('access_token');

    return (
        <Router>
            <Switch>
                <Route exact path="/get-started">
                    <Register/>
                </Route>
                <Route exact path="/onboarding">
                    <OnBoarding/>
                </Route>
                <Route exact path="">
                    {
                        token ? (
                            <Dashboard/>
                        ) : ( 
                            <Login/>
                        )
                    }
                    {/* <Dashboard/> */}
                </Route>
            </Switch>
        </Router>
    )
}

export default App