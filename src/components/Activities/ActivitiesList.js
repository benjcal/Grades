import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'

class ActivitiesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: 2
        }
    }



    render() {
        return (
            <div className="activities-list">
                {store.listActivities(store.currentCourse).map(n => 
                    <div className="activity" key={n.id}>
                        <span>ID: {n.id} </span>
                        <span>Name: {n.name} </span>
                        <span>Course: {n.course_id} </span>
                        <span>Total Points: {n.total_points}</span>
                    </div>
                )}
            </div>
        )
    }
}

export default observer(ActivitiesList)