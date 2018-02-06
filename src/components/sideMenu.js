import React, { Component } from 'react'
import '../css/sideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <a href=""><li><i className="fa fa-home"></i>Home</li></a>
                    <a href=""><li><i className="fa fa-book"></i>Courses</li></a>
                    <a href=""><li><i className="fa fa-check-circle-o"></i>Assignments</li></a>
                    <a href=""><li><i className="fa fa-users"></i>Students</li></a>
                    <a href=""><li><i className="fa fa-cogs"></i>Settings</li></a>
                </ul>
            </aside>
        )
    }
}

export default SideMenu
