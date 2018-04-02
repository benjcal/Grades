import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'

class ActivitiesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: 1
        }

        this.courseChange = this.courseChange.bind(this)
    }

    courseChange(e) {
        if (e.target.value === "") {
            this.setState({course: e.target.value})
        } else {
            this.setState({course: parseInt(e.target.value,10)})
        }
    }


    render() {
        return (
            <div className="activities-list">
                <span>Course <input type="text" value={this.state.course} onChange={this.courseChange}/></span>
                {store.listActivities(this.state.course).map(n => 
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