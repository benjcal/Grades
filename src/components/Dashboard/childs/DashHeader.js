import React from 'react'
import Icon from 'react-icons/lib/md/all-out'

const DashHeader = ({ icon, name }) =>  (
    <div className="dash-header">
        <span className="dash-header__icon">{icon ? null : <Icon />}</span>
        <span className="dash-header__name">{name}</span>
    </div>
)
export default DashHeader