import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'

class CourseActivities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: 2
        }
    }

    render() {
        return (
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
        )
    }
}

export default observer(CourseActivities)