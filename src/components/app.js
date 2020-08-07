import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Login from '../views/login'
import Setup from '../views/setup'
import Dashboard from '../views/dashboard'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/setup">
                    <Setup/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App