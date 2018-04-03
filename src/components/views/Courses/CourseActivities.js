import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'
import CoursesSubMenu from './CoursesSubMenu'

const CourseActivities = ({ match }) => {
    let { path, params } = match
    let { id } = params
    return (
        <div className="course-container">
            <CoursesSubMenu id={id} localtion={path}/>
            <div className="course-activities">
                <div className="head">
                    <span className="id">ID</span>
                    <span className="name">NAME</span>
                    <span className="points">TOTAL POINTS</span>
                </div>

                {store.listActivities(store.currentCourse).map(n => 
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