import React from 'react'

const DashWidget = (props) =>  (
    <div className="dash-widget">
        <div className="dash-widget__name">Courses</div>
        <hr/>
        <div className="dash-widget__table">
            <div className="dash-widget__table-head">table head</div>
            <div className="dash-widget__table-body">
                <div className="dash-widget__table-row"></div>
                <div className="dash-widget__table-row"></div>
                <div className="dash-widget__table-row"></div>
                <div className="dash-widget__table-row"></div>
                <div className="dash-widget__table-row"></div>
            </div>
            
        </div>
        
    </div>
)
export default DashWidget