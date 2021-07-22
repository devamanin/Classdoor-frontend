import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './sidebar.css'
// import Header from '../rightcon/header/Header'
import RightContainer from '../rightcon/RightContainer'
export default function Sidebar() {
    return (
        <>
        <Router>
        <div className="container">
            <div className="logo"></div>
           <Link to="/profile" className="route-link"><i className="fa fa-user"/></Link>
           <Link to="/course" className="route-link"><i class="fa fa-book"></i></Link>
           <div className="route-link"><i className="fa fa-sign-out"/></div>
        </div>
        <Switch>
            <Route exact path="/profile"><RightContainer headertitle = {"Profile"} content = {"Profile"}></RightContainer></Route>
            <Route exact path="/course"><RightContainer headertitle={"Course Catalog"} content = {"course catalog"}></RightContainer></Route>
        </Switch>

        </Router>
        </>
    )
}
