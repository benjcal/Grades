import React from 'react'
import 'css/app-header.css'

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="left">
                <div className="app-name"><b>Grades</b>App</div>
            </div>
            <div className="right">
                <div className="user-name">Ben Cal</div>
            </div>
        </div>
    )
}

export default AppHeader
