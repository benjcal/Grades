import React from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'
import CourseSubMenu from './CourseSubMenu'

const CourseActivities = ({ match }) => {
    let { id } = match.params
    id = parseInt(id, 10)
    return (
        <div className="course-container">
            <CourseSubMenu id={id}/>
            <div className="course-activities">
                <div className="head">
                    <span className="id">ID</span>
                    <span className="name">NAME</span>
                    <span className="points">TOTAL POINTS</span>
                </div>

                {store.activities.byCourse(id).map(n => 
                    <div className="activity" key={n.id}>
                        <div className="id">{n.id} </div>
                        <div className="name">{n.name} </div>
                        <div className="points">{n.total_points}</div>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default observer(CourseActivities)