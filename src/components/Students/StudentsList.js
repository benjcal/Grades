import React from 'react'
import { observer} from 'mobx-react'
import { observable } from 'mobx'
import store from 'store/store'
import StudentsSubMenu from './StudentsSubMenu'
import AddStudent from './AddStudent'

let addStudentsVisible = observable(false)

const StudentsList = (props) => {
    return (
        <div className="students-container">
            
            <StudentsSubMenu callback={() => {addStudentsVisible.set(true)}}/>
            {addStudentsVisible.get() && <AddStudent cancel={() => {addStudentsVisible.set(false)}} />}
            <div className="students-list">
                <div className="head">
                    <span className="id">ID</span>
                    <span className="first">FIRST</span>
                    <span className="last">LAST</span>
                    <span className="email">EMAIL</span>
                    <span className="phone">PHONE</span>
                </div>
                {store.students.values().map(n => {
                    return <StudentRow student={n} key={n.id}/>
                })}

            </div>
        </div>
    )
}

export default observer(StudentsList)

let stateView = {
    editing: observable('')
}


const StudentRow = observer(({ student }) => {
    let originalStudent = student
    let state = {
        student: observable(student),
        editing: observable(false)
    }

    const change = (e, id) => {
        switch (e.target.parentElement.className) {
            case 'first':
                state.student.first = e.target.value
                stateView.editing.set('first' + id)
                break
            case 'last':
                state.student.last = e.target.value
                stateView.editing.set('last' + id)
                break
            case 'email':
                state.student.email = e.target.value
                stateView.editing.set('email' + id)
                break
            case 'phone':
                state.student.phone = e.target.value
                stateView.editing.set('phone' + id)
        }
    }
    const save = () => {
        // store.students.update(state.student)
        stateView.editing.set('')
    }
    const cancel = () => {
        // console.log(student)
        // state.student = originalStudent
        stateView.editing.set('')
    }
    return (
        <div className="student">
            <div className="id">{student.id}</div>
            {/* <div className="first">{state.student.first}</div> */}
            <div className="first">
                <input type="text" value={state.student.first} onChange={(e, id) => change(e, student.id)} tabIndex={student.id}/>
                {stateView.editing.get() === 'first' + student.id && <span>
                    {/* <div className="action" onClick={save}>save</div> */}
                    <div className="action" onClick={cancel}>cancel</div>
                </span> }
            </div>
            <div className="last">
                <input type="text" value={state.student.last} onChange={(e, id) => change(e, student.id)}/>
                {stateView.editing.get() === 'last' + student.id && <div className="action" onClick={save}>save</div>}
            </div>
            <div className="email">
                <input type="text" value={state.student.email} onChange={(e, id) => change(e, student.id)}/>
                {stateView.editing.get() === 'email' + student.id && <div className="action" onClick={save}>save</div>}
            </div>
            <div className="phone">
                <input type="text" value={state.student.phone} onChange={(e, id) => change(e, student.id)}/>
                {stateView.editing.get() === 'phone' + student.id && <div className="action" onClick={save}>save</div>}
            </div>
        </div>
    )
})