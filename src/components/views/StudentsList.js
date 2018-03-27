import React from 'react'
import 'jdenticon'
import { observer, inject } from 'mobx-react'
import StudentRow from 'components/views/StudentsList/StudentRow'

const StudentsList = (props) => {
    // let { store } = props
    return (
        <div className="students-list">
            <div className="view-header" style={{display: 'flex', background: '#4c3652', color: '#FFF'}}>
                <h1>Students List</h1>
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
                    {props.store.students.entries().map(n => 
                        <StudentRow studentId={n[0]} key={n[0]} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default inject('store')(observer(StudentsList))
