import React, { Component } from 'react'
import { observer } from 'mobx-react'
import 'jdenticon'
import Delete from 'react-icons/lib/md/delete-forever'
import Ok from 'react-icons/lib/md/check'
import Clear from 'react-icons/lib/md/clear'
import store from 'store/store'

class StudentRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            nowEditing: '',
            newStudent: {}
        }

        this.edit = this.edit.bind(this)
        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.change = this.change.bind(this)
        this.remove = this.remove.bind(this)
    }

    edit(e, student) {
        if(e.target === e.currentTarget) {
            this.setState({editing: !this.state.editing})
            this.setState({newStudent: student})
         }
    }

    clear() {
        this.setState({editing: !this.state.editing})
    }

    save() {
        this.props.store.updateStudent(this.state.newStudent)
        this.setState({editing: !this.state.editing})
    }

    change(e) {
        let name = e.target.name
        let value = e.target.value

        let obj = {}
        obj[name] = value

        this.setState({newStudent: Object.assign({}, this.state.newStudent, obj)})
    }
    remove(id) {
        this.props.store.removeStudent(id)
    }

    render() {
        let { student} = this.props
        return (
            <tr>
                <th scope="row">{student.id}</th>
                <th><canvas width="24" height="24" data-jdenticon-value={student.id}></canvas></th>
                <td onClick={(e) => this.edit(e, student)}>{this.state.editing ?
                    <span>
                        <input
                            type="text"
                            name="first"
                            value={this.state.newStudent.first}
                            onChange={(e) => {this.change(e)}}
                            autoFocus
                            onKeyPress={(e) => e.key === 'Enter' ? this.save() : null}
                        />
                        <Ok style={{color: 'green'}} onClick={() => {this.save()}}/>
                        <Clear style={{color: 'red'}} onClick={() => {this.clear()}}/>
                    </span>
                    : student.first
                }</td>
                <td>{student.last}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td style={{color: '#a17575'}} onClick={() => this.remove(student.id)}><Delete /></td>
            </tr>
        )
    }
}

export default observer(StudentRow)