import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'
import { NavLink, withRouter } from 'react-router-dom'

const StudentsSubMenu = () => {
    return (
        <div className="courses-sub-menu">
            <div className="title">STUDENTS</div>

            <NavLink
                to={`/students/add`}
                activeClassName="active"
                className="item">
                <div className="name">Add Students</div>
            </NavLink>
        </div>
    )
}

export default observer(StudentsSubMenu)