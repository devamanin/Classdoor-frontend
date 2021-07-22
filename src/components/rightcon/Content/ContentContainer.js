import React from 'react'
import './contentcontainer.css'

export default function ContentContainer(props) {
    return (
        <div className="content-container">
            <h1>This is {props.content} Container</h1>
        </div>
    )
}