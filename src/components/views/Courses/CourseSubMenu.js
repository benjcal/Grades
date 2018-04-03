import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'
import { NavLink, withRouter } from 'react-router-dom'

const CourseSubMenu = ({ id }) => {
    return (
        <div className="courses-sub-menu">
            <div className="title">{store.courses.get(id).name}</div>

            <NavLink
                to={`/course/${id}/students`}
                activeClassName="active"
                className="item">
                <div className="name">Students</div>
                <div className="total">{store.enrolledStudents(id).length}</div>
            </NavLink>

            <div className="subitem">ENROLL STUDENTS</div>

            <NavLink
                to={`/course/${id}/activities`}
                activeClassName="active"
                className="item">
                <div className="name">Activities</div>
                <div className="total">{store.listActivities(id).length}</div>
            </NavLink>

            <div className="subitem">ADD ACTIVITY</div>
        </div>
    )
}

export default observer(CourseSubMenu)