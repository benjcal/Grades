import React from 'react'
import store from 'store/store'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

const CoursesList = (props) => {
    return (
        <div className="courses-list">
            {store.courses.values().map(n => 
                <Link
                    to={`course/${n.id}`}
                    className="course" key={n.id}>
                    <div className="name">{n.name}</div>
                    <div className="count">{store.enrolledStudents(n.id).length} Students</div>
                </Link>
            )}
        </div>
    )
}

export default observer(CoursesList)