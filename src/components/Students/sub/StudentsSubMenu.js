import React from 'react'
import { observer } from 'mobx-react'

const StudentsSubMenu = ({ callback }) => {
    return (
        <div className="courses-sub-menu">
            <div className="title">STUDENTS</div>

            {/* <NavLink
                to={`/students/add`}
                activeClassName="active"
                className="item">
                <div className="name">Add Students</div>
            </NavLink> */}

            <div
                onClick={callback}
                className="item">
                <div className="name">Add Students</div>
            </div>
        </div>
    )
}

export default observer(StudentsSubMenu)