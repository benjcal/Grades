import React from 'react'

const DashMenu = ({ data }) =>  (
    <div className="dash-menu">
        {data.map((e, i) => 
            <div className="dash-menu__element" key={i}>
                <div className="dash-menu__header">
                        <span>{e.header}</span>
                    </div>
                    {e.items.map((n, j) => 
                        <div className="dash-menu__item" key={j}>
                            <a>{n.name}</a>
                        </div>
                    )}
            </div>
        )}
        {/* <div className="dash-menu__header">
            <span>Course Menu</span>
        </div>
        <div className="dash-menu__item">
            <a>Add Course</a>
        </div>
        <div className="dash-menu__item">
            <a>Add Course</a>
        </div> */}
    </div>
)
export default DashMenu