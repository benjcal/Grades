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
            {store.students.entries().map(n => {
                return (
                    <tr key={n[1].id}>
                        <td>{n[1].id}</td>
                        <td>{n[1].firstName}</td>
                        <td>{n[1].lastName}</td>
                        <td>{n[1].grade}</td>
                        <td>{n[1].email}</td>
                        <td>{n[1].phone}</td>
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