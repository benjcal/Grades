import React from 'react'
import StudentsSubMenu from './StudentsSubMenu'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import store from 'store/store'

let newStudent = observable({
    first: '',
    last: '',
    email: '',
    phone: ''
})



const AddStudent = ({ history }) => {

    const change = (e, what) => {
        switch (what) {
            case 'first':
                newStudent.first = e.target.value
                break
            case 'last':
                newStudent.last = e.target.value
                break
            case 'email':
                newStudent.email = e.target.value
                break
            case 'phone':
                newStudent.phone = e.target.value
        }
    }
    const save = () => {
        newStudent.id = Math.max(...store.students.keys()) + 1
        store.students.add(newStudent)
        history.goBack()
    }
    return (
        <div className="students-container">
            <StudentsSubMenu />
            <div className="add-student">
                <div className="header">ADD STUDENT</div>
                <hr/>
                <div className="body">
                    <label>First Name
                        <input 
                            onChange={(e) => change(e,'first')}
                            value={newStudent.first}/></label>
                    <label>Last Name
                        <input 
                            onChange={(e) => change(e,'last')}
                            value={newStudent.last}/></label>
                    <label>Email
                        <input 
                            onChange={(e) => change(e,'email')}
                            value={newStudent.email}/></label>
                    <label>Phone
                        <input 
                            onChange={(e) => change(e,'phone')}
                            value={newStudent.phone}/></label>
                </div>
                <div className="buttons">
                    <button disabled="disabled">cancel</button>
                    <button onClick={save}>save</button>
                </div>
            </div>
        </div>
        
    )
}

export default observer(AddStudent)