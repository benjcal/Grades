import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Modal from 'components/modal'
import AddStudentIcon from 'react-icons/lib/ti/user-add'
import Ok from 'react-icons/lib/fa/check'
import Trash from 'react-icons/lib/fa/trash-o'
import 'styles/students.css'
import 'styles/courses.css'

class Students extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addStudentVisible: false,
            newId: "",
            newFirstName: "",
            newLastName: "",
            newGrade: "",
            newEmail: "",
            newPhone: "",
        }

        this.handleAddCourseButton = this.handleAddCourseButton.bind(this)
        this.handleIdChange = this.handleIdChange.bind(this)
        this.handleFistNameChange = this.handleFistNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.addNewStudent = this.addNewStudent.bind(this)
        this.handleSaveClick = this.handleSaveClick.bind(this)
        this.handleCancelClick = this.handleCancelClick.bind(this)
    }

    handleAddCourseButton() {
        this.setState({
            addStudentVisible: !this.state.addStudentVisible
        })
    }
    handleIdChange(e) {
        this.setState({
            newId: e.target.value
        })
    }
    handleFistNameChange(e) {
        this.setState({
            newFirstName: e.target.value
        })
    }
    handleLastNameChange(e) {
        this.setState({
            newLastName: e.target.value
        })
    }
    handleGradeChange(e) {
        this.setState({
            newGrade: e.target.value
        })
    }
    handleEmailChange(e) {
        this.setState({
            newEmail: e.target.value
        })
    }
    handlePhoneChange(e) {
        this.setState({
            newPhone: e.target.value
        })
    }
    handleSaveClick() {
        this.addNewStudent()
    }
    handleCancelClick() {
        this.setState({
            addStudentVisible: false,
            newId: "",
            newFirstName: "",
            newLastName: "",
            newGrade: "",
            newEmail: "",
            newPhone: "",
        })
    }
    addNewStudent() {
        this.props.store.addStudent({
            id: this.state.newId,
            firstName: this.state.newFirstName,
            lastName: this.state.newLastName,
            grade: this.state.newGrade,
            email: this.state.newEmail,
            phone: this.state.newPhone
        })
        this.setState({
            addStudentVisible: false,
            newId: "",
            newFirstName: "",
            newLastName: "",
            newGrade: "",
            newEmail: "",
            newPhone: "",
        })
    }


    render() {
        let {
            store
        } = this.props

        return (
            <div className="students">
                <div className="sub-header">
                    <button onClick={this.handleAddCourseButton}>Add Course</button>
                </div>
            <table>
                <tbody>
                <tr>
                    <th className="id-header" onClick={this.handleClick}>ID</th>
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
            {this.state.addStudentVisible &&
                    <Modal>
                        <div className="add-student-header">
                            <AddStudentIcon />Add Student
                        </div>
                        <div className="add-student-inputs">
                            <input type="text" placeholder="ID" value={this.state.newId} onChange={this.handleIdChange}/>
                            <input type="text" placeholder="First name" value={this.state.newFirstName} onChange={this.handleFistNameChange}/>
                            <input type="text" placeholder="Last name" value={this.state.newLastName} onChange={this.handleLastNameChange}/>
                            <input type="text" placeholder="Grade" value={this.state.newGrade} onChange={this.handleGradeChange}/>
                            <input type="text" placeholder="Email" value={this.state.newEmail} onChange={this.handleEmailChange}/>
                            <input type="text" placeholder="Phone" value={this.state.newPhone} onChange={this.handlePhoneChange}/>
                        </div>
                        <div className="add-student-buttons">
                            <button className="save" onClick={this.handleSaveClick}><Ok /></button>
                            <button onClick={this.handleCancelClick}><Trash /></button>
                        </div>
                    </Modal>
                }
            </div>
        )
    }
}

export default inject('store')(observer(Students))