import React from 'react'
import store from 'store/store'

const CoursesList = (props) => {
    return (
        <div className="courses-list">
            {store.courses.entries().map(n => 
                <div className="course" key={n[0]}>
                    <span>ID: {n[0]} </span>
                    <span>Name: {n[1].name}</span>
                </div>
            )}
        </div>
    )
}

export default CoursesList