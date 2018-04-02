import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const CoursesList = (props) => {
    return (
        <div className="courses-list">
            {store.courses.values().map(n => 
                <div
                    className="course" key={n.id}
                    onClick={() => store.selectCourse(n.id)}>
                    <div className="name">{n.name}</div>
                    <div className="count">{store.enrolledStudents(n.id).length} Students</div>
                </div>
            )}
        </div>
    )
}

export default observer(CoursesList)