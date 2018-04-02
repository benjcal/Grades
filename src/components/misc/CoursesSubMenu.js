import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const SecondaryMenu = () => {
    return (
        <div className="courses-sub-menu">
            <div className="title">{store.courses.get(store.currentCourse).name}</div>

            <div
                className={["item", !store.currentView.includes('activities') ? 'active' : null].join(' ')}
                onClick={() => {store.setView(store.currentView.replace('activities', ''))}}
                >
                <div className="name">Students</div>
                <div className="total">{store.enrolledStudents(store.currentCourse).length}</div>
            </div>

            <div className="subitem">ENROLL STUDENTS</div>

            <div
            className={["item", store.currentView.includes('activity') ? 'active' : null].join(' ')}
            onClick={() => {store.setView(store.currentView + 'activity')}}
            >
                <div className="name">Activities</div>
                <div className="total">{store.listActivities(store.currentCourse).length}</div>
            </div>

            <div className="subitem">ADD ACTIVITY</div>
        </div>
    )
}

export default observer(SecondaryMenu)