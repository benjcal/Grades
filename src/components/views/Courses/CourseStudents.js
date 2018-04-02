import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const CourseStudents = (props) => {
    return (
        <div className="course-students">
            {store.enrolledStudents(store.currentCourse).map(n => 
                <div className="student" key={n.id}>
                    <div className="id">{n.id}</div>
                    <div className="name">{n.first} {n.last}</div>
                </div>
            )}
        </div>
    )
}

export default observer(CourseStudents)