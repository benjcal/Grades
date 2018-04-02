import React from 'react'
import store from 'store/store'
import { observer } from 'mobx-react'

const SecondaryMenu = () => {
    return (
        <div className="secondary-menu">
            <div className="title">{store.courses.get(store.currentCourse).name}</div>

            <div className="item active">
                <div className="name">Students</div>
                <div className="total">22</div>
            </div>

            <div className="item">
                <div className="name">Activities</div>
                <div className="total">12</div>
            </div>
        </div>
    )
}

export default observer(SecondaryMenu)