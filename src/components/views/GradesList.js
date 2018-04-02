import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from 'store/store'

class GradesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: 1,
        }

        this.grade = this.grade.bind(this)
    }

    grade(e) {

    }

    render() {
        return (
            <div className="grades-list">
                <h1>Course: {store.courses.get(this.state.course).name}</h1>
                <table border="1">
                    <tr>
                        <td></td>
                        {store.listActivities(this.state.course).map(n => 
                            <td>id: {n.id} | {n.name}</td>
                        )}
                    </tr>

                    {store.enrolledStudents(this.state.course).map(n => 
                        <tr>
                            <td>{n.id} | {n.first}</td>
                            {store.listActivities(this.state.course).map(j => 
                                <td><input type="text" value={store.activityGrade(j.id, n.id)}/></td>
                            )}
                        </tr>
                    )}
                </table>
            </div>
            
        )
    }
}

export default observer(GradesList)