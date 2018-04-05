import React from 'react'
import store from 'store/store'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

const CoursesList = (props) => {
    return (
        <div className="courses-list">
            {store.courses.values().map(c => 
                <Link
                    to={`/course/${c.id}`}
                    className="course" key={c.id}>
                    <div className="name">{c.name}</div>
                    <div className="count">{store.students.byCourse(c.id).length} Students</div>
                    <div className="count">{store.activities.byCourse(c.id).length} Activities</div>
                </Link>
            )}
        </div>
    )
}

export default observer(CoursesList)