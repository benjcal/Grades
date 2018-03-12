import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Modal from 'components/modal'
import 'styles/students.css'
import 'styles/courses.css'

class Students extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addStudentVisible: false
        }

        this.handleAddCourseButton = this.handleAddCourseButton.bind(this)
    }

    handleAddCourseButton() {
        this.setState({
            addStudentVisible: !this.state.addStudentVisible
        })
        super()
        this.state = {
            test: 0,
            modal: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({modal: !this.state.modal})
    }

    render() {
        let { store } = this.props
        return (
            <div className="students">
<<<<<<< HEAD
                <div className="sub-header">
                    <button onClick={this.handleAddCourseButton}>Add Course</button>
                    {this.state.addStudentVisible && <button>Add Course</button>}
                </div>
=======
            {this.state.modal && <Modal>
            <div className="modal-bg">
                    <div className="modal">
                        <h1 onClick={this.handleClick}>{this.state.test}</h1>
                    </div>
                </div>
            </Modal>}
                
>>>>>>> 223bc1772f7454fb2fd0259e3ddc2e9d0123f5b5
            <table>
                <tbody>
                <tr>
                    <th className="id-header" onClick={this.handleClick}><b>ID</b></th>
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