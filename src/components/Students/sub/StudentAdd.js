import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import store from 'store/store'

let newStudent = observable({
    first: '',
    last: '',
    email: '',
    phone: ''
})

const AddStudent = ({ cancel }) => {

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
                break
            default: 
                return {}
        }
    }
    const save = () => {
        newStudent.id = Math.max(...store.students.keys()) + 1
        store.students.add(newStudent)
        newStudent = observable({
            first: '',
            last: '',
            email: '',
            phone: ''
        })
        cancel()
    }
    return (
        <div className="add-student-container">

            <div className="courses-modal">
                {store.courses.values().map(n => <div>{n.name} <input type="checkbox"/></div>)}

            </div>
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
                    <div className="courses">
                        <div className="list">
                            <span>course 1</span>
                            <span>course 2</span>
                            <span>course 3</span>
                            <span>course 4</span>
                        </div>
                        <button>Add Course</button>
                        
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={cancel}>cancel</button>
                    <button onClick={save}>save</button>
                </div>
            </div>
        </div>
        
    )
}

export default observer(AddStudent)