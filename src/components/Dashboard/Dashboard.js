import React from 'react'
import DashMenu from './childs/DashMenu'
import DashHeader from './childs/DashHeader'
import DashWidgets from './childs/DashWidgets'
import DashGraphBar from './childs/DashGraphBar'
import DashList from './childs/DashList'
import 'css/dashboard/dashboard.css'

let coursesDashMenuData = [
    {
        header: "Course Menu1",
        items: [
            {name: 'Add Course1', url: '#'},
            {name: 'Add Course2 ', url: '#'},
            {name: 'Add Course3', url: '#'}
        ]
    },
    {
        header: "Course Menu2",
        items: [
            {name: 'Add Course4', url: '#'},
            {name: 'Add Course5', url: '#'},
            {name: 'Add Course6', url: '#'}
        ]
    }
]



const Dashboard = (props) =>  (
    <div className="dashboard">
        <DashMenu data={coursesDashMenuData}/>
        <DashHeader name="some name"/>
        <DashWidgets>
            <DashList />
            <DashGraphBar />
            
        </DashWidgets>
    </div>
)
export default Dashboard