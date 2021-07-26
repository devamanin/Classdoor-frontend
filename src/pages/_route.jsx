import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { useState } from 'react'

import LoginPage from './login'
import CoursePage from './course'
import ProfilePage from './profile'
import LogoutPage from './logout'
import NotFoundPage from './notfound'
import Layout from '../components/layout'

const Routes = () =>{
    // let loggedIn = false
    return (
        <Router>
            <Switch>
                <Route exact path = "/"><LoginPage /></Route>
                <Route exact path = "/profile"><Layout><ProfilePage/></Layout></Route>
                <Route exact path = '/course'><Layout><CoursePage/></Layout></Route>
                <Route exact path = '/logout'><LogoutPage /></Route>
                <Route exact path = '*'><NotFoundPage /></Route>
            </Switch>
        </Router>
    )
}

export default Routes