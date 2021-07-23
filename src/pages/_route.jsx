import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { useState } from 'react'

import CoursePage from './course'
import ProfilePage from './profile'
import LoginPage from './login'
import NotFoundPage from './notfound'


const Routes = () =>{
    // let loggedIn = false
    return (
        <Router>
            <Switch>
                <Route exact path = '/profile'>
                {/* {loggedIn ? <ProfilePage /> : <Redirect to='/' />} */}
                    <ProfilePage />
                </Route>
                <Route exact path = '/course'>
                    <CoursePage />
                </Route>
                <Route exact path = '/'>
                    <LoginPage />
                </Route>
                <Route exact path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes