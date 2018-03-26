import React, { Component } from 'react'
import 'jdenticon'
import store from 'store/store'
import { observer } from 'mobx-react'
import Delete from 'react-icons/lib/md/delete-forever'
import Ok from 'react-icons/lib/md/check'
import Clear from 'react-icons/lib/md/clear'


class StudentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: null
        }

        this.edit = this.edit.bind(this)
        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.changeName = this.changeName.bind(this)
    }

    edit(e, student) {
        if(e.target === e.currentTarget) {
            this.setState({editing: student.id})
            this.setState({student: student})
         }
    }

    clear(student) {
        console.log(student)
        this.setState({editing: 'none'})
    }

    save() {
        store.updateStudent(this.state.student)
        this.setState({editing: 'none'})
    }

    changeName(e) {
        let obj = Object.assign({}, this.state.student, {first: e.target.value})
        this.setState({student: obj})
    }
    render() {
        return (
            <div className="students-list">
                <div className="view-header" style={{display: 'flex', background: '#4c3652', color: '#FFF'}}>
                    <h1>Students List</h1>
                    <button className="btn btn-primary" style={{height: '40px', margin: '0 40px'}}>Add Student</button>
                </div>
                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" width="18">ID</th>
                            <th scope="col" width="42"></th>
                            <th scope="col" width="180">First</th>
                            <th scope="col" width="100">Last</th>
                            <th scope="col" width="160">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col" width="10">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(store.students).map(n => {
                            let student = n[1]
                            return (
                                <tr key={student.id}>
                                    <th scope="row">{student.id}</th>
                                    <th><canvas width="40" height="40" data-jdenticon-value={student.id}></canvas></th>
                                    <td onClick={(e) => this.edit(e, student)}>{this.state.editing === student.id ?
                                    <span>
                                        <input type="text" value={this.state.student.first} onChange={(e) => {this.changeName(e)}} autoFocus/>
                                        <Ok style={{color: 'green'}} onClick={() => {this.save()}}/>
                                        <Clear style={{color: 'red'}} onClick={() => {this.clear(student)}}/></span>
                                    : student.first
                                    }</td>
                                    <td>{student.last}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td style={{color: '#a17575'}}><Delete /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default observer(StudentsList)
