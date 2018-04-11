import React from 'react'
import DashMenu from './childs/DashMenu'
import DashHeader from './childs/DashHeader'
import DashWidgets from './childs/DashWidgets'
import DashWidget from './childs/DashWidget'
import 'css/dashboard/dashboard.css'

const Dashboard = (props) =>  (
    <div className="dashboard">
        <DashMenu />
        <DashHeader />
        <DashWidgets>
            <DashWidget />
            <DashWidget />
            <DashWidget />
            <DashWidget />
        </DashWidgets>
    </div>
)
export default Dashboard