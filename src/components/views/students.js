import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Modal from 'components/modal'
import 'styles/students.css'
import 'styles/courses.css'

class Students extends Component {
    constructor(props) {
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
            {this.state.modal && <Modal>
            <div className="modal-bg">
                    <div className="modal">
                        <h1 onClick={this.handleClick}>{this.state.test}</h1>
                    </div>
                </div>
            </Modal>}
                
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