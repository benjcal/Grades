import React from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'
import CourseSubMenu from './CourseSubMenu'


const Course = ({ match }) => {
    let { id } = match.params
    id = parseInt(id, 10)
    let course = store.courses.get(id)
    return (
        <div className="course-container">
            <CourseSubMenu id={id}/>
            <div className="course">
                <h2>ID: {course.id}</h2>
                <h2>Name: {course.name}</h2>
                <h2>Grade: {course.grade}</h2>
                <h3>Students:</h3>
                <ul>
                    {store.students.byCourse(id).map(s => 
                        <li>{s.first} {s.last}</li>
                    )}
                </ul>

                <h3>Activities:</h3>
                <ul>
                    {store.activities.byCourse(id).map(a =>
                        <li>{a.name} #{a.id} <b>Average:</b> {a.average()} of {a.total_points}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default observer(Course)