import React from 'react'
import DashMenu from 'components/Dashboard/childs/DashMenu'
import DashHeader from 'components/Dashboard/childs/DashHeader'
import DashList from 'components/Dashboard/childs/DashList'
import DashWidgets from 'components/Dashboard/childs/DashWidgets'
import 'css/dashboard/dashboard.css'

const CourseAdd = (props) =>  (
    <div className="course-add dashboard">
        <DashHeader name="Add Course"/>
        <DashWidgets>
            
        </DashWidgets>
    </div>
)
export default CourseAdd