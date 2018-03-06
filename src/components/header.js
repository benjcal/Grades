import React, { Component } from 'react'
import 'styles/header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">Grades</div>
                <div className="nav">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="user">Sofia Taylor</div>
            </header>
        )
    }
}

export default Header
