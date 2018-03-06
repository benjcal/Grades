import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'styles/students.css'
import 'styles/courses.css'

class Students extends Component {

    render() {
        let { store } = this.props
        return (
            <div className="students">
            <table>
                <tbody>
                <tr>
                    <th className="id-header"><b>ID</b></th>
                    <th><b>First name</b></th>
                    <th><b>Last name</b></th>
                    <th className="grades-header"><b>Grade</b></th>
                    <th><b>Email</b></th>
                    <th><b>Phone</b></th>
                </tr>
            {store.students.values().map(n => {
                return (
                    <tr key={n.id}>
                        <td>{n.id}</td>
                        <td>{n.firstName}</td>
                        <td>{n.lastName}</td>
                        <td>{n.grade}</td>
                        <td>{n.email}</td>
                        <td>{n.phone}</td>
                    </tr>
                )
            }          
        )}
        </tbody>
            </table>
            </div>
        )
    }
}

export default inject('store')(observer(Students))