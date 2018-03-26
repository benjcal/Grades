import React from 'react'
import SparkMD5 from 'spark-md5'
import 'jdenticon'
import store from 'store/store'
import { observer } from 'mobx-react'

export default observer((props) => {
    let { students } = store
    return (
        <div className="students-list">
            <h1>Students List</h1>
            <div className="table">
                <div className="row header">
                    <div className="col">ID</div>
                    <div className="col">First Name</div>
                    <div className="col">Last Name</div>
                    <div className="col">Phone</div>
                    <div className="col">Email</div>
                </div>
                <div className="row">
                    {
                        Object.entries(students).map(n => {
                            let student = n[1]
                            return (<div>
                                <div className="col">{student.id}</div>
                                <div className="col">{student.firstName}</div>
                                <div className="col">{student.lastName}</div>
                                <div className="col">{student.phone}</div>
                                <div className="col">{student.email}</div>
                            </div>
                                
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
})
    