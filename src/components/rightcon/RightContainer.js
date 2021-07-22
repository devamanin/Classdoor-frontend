import React from 'react'
import Header from './header/Header'
import './rightcontainer.css'
import ContentContainer from './Content/ContentContainer'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function RightContainer(props) {
    return (
    <div className="right-side-container">
        <Header headertitle = {props.headertitle}></Header>
        <ContentContainer content = {props.content}></ContentContainer>
    </div>
    )
}
