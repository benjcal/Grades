import React, { Component } from 'react'
import students from '../data/students.json'
import '../styles/students.css'
import '../styles/courses.css'

import Face from 'react-icons/lib/md/face'

export default class Students extends Component {
    render() {
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
            {students.map(n => <tr key={n.id}>
                <td className={["avatar", `color-fg${Math.ceil(Math.random() * 6)}`].join(' ')}><Face /></td>
                <td>{n.id}</td>
                <td>{n.first_name}</td>
                <td>{n.last_name}</td>
                <td>{n.grade}</td>
                <td>{n.email}</td>
                <td>{n.phone}</td>
            </tr>
            
        )}
        </tbody>
            </table>
            </div>
        )
    }
}
