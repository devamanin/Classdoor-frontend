import React from 'react'
import './header.css'

export default function Header(props) {
    return (
        <>
        <div className="header">
            <div className="header-container">
                <span>{props.headertitle}</span>
            </div>
        </div>
        <hr />
        </>
    )
}
