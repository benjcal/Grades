import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'
import CourseSubMenu from './CourseSubMenu'

const CourseStudents = ({ match }) => {
    let { id } = match.params
    id = parseInt(id, 10)
    return (
        <div className="course-container">
            <CourseSubMenu id={id}/>
            <div className="course-students">
                <div className="head">
                    <span className="id">ID</span>
                    <span className="name">NAME</span>
                </div>
                {store.students.byCourse(id).map(n => {
                    return <CourseStudentRow student={n} key={n.id}/>
                })}
            </div>
        </div>
    )
}

export default observer(CourseStudents)

const CourseStudentRow = ({ student }) => 
    <div className="student">
        <div className="id">{student.id}</div>
        <div className="name">{student.first} {student.last}</div>
    </div>
