import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'styles/students.css'
import 'styles/courses.css'

import Face from 'react-icons/lib/md/face'

class Students extends Component {

    render() {
        let { students } = this.props
        return (
            <div className="students">
            <table>
                <tbody>
                <tr>
                    <th className="avatar-header" style={{background: "#FFF"}}></th>
                    <th className="id-header"><b>ID</b></th>
                    <th><b>First name</b></th>
                    <th><b>Last name</b></th>
                    <th className="grades-header"><b>Grade</b></th>
                    <th><b>Email</b></th>
                    <th><b>Phone</b></th>
                </tr>
            {Object.keys(students).map(n => {
                let m = students[n]
                return (
                    <tr key={m.id}>
                        <td className={["avatar", `color-fg${Math.ceil(Math.random() * 6)}`].join(' ')}><Face /></td>
                        <td>{m.id}</td>
                        <td>{m.first_name}</td>
                        <td>{m.last_name}</td>
                        <td>{m.grade}</td>
                        <td>{m.email}</td>
                        <td>{m.phone}</td>
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

function mapStateToProps(state) {
    return { students: state.students }
}
export default connect(mapStateToProps, null)(Students)