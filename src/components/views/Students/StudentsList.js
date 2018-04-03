import React from 'react'
import 'jdenticon'
import { observer} from 'mobx-react'
import store from 'store/store'
import StudentRow from './/StudentRow'

const StudentsList = (props) => {

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
                    {store.students.entries().map(n => {
                        return <StudentRow student={n[1]} key={n[0]} />
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default observer(StudentsList)
