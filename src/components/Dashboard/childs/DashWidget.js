import React from 'react'
import DashTable from './DashTable'

const DashWidget = (props) =>  (
    <div className="dash-widget">
        <div className="dash-widget__name">Courses</div>
        <hr/>
        <DashTable />
    </div>
)
export default DashWidget