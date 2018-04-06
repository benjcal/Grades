import React from 'react'
import {Bar} from 'react-chartjs-2'
import { observer } from 'mobx-react'
import store from 'store/store'
import CourseSubMenu from './sub/CourseSubMenu'
import 'css/courses/course-details.css'

const Course = ({ match }) => {

    let { id } = match.params
    id = parseInt(id, 10)
    let course = store.courses.get(id)

    const data = {
        labels: store.activities.byCourse(id).map(a => a.name),
        datasets: store.activities.byCourse(id).map(a => {
            return {
                label: a.name,
                data: store.activities.byCourse(id).map(a => a.average()),
                backgroundColor: "#369"
            }
        })
    //     datasets: [
    //         {
    //         label: 'Activities Average Percent',
    //         backgroundColor: '#f00',
    //         // borderColor: 'rgba(255,99,132,1)',
    //         // borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //         // hoverBorderColor: 'rgba(255,99,132,1)',
    //         data: store.activities.byCourse(id).map(a => a.average())
    //     },
    //     {
    //         label: 'second',
    //         backgroundColor: 'rgba(25,99,132,0.2)',
    //         // borderColor: 'rgba(255,99,132,1)',
    //         // borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(25,99,132,0.4)',
    //         // hoverBorderColor: 'rgba(255,99,132,1)',
    //         data: store.activities.byCourse(id).map(a => a.average())
    //     }
    // ]
    }

    return (
        <div className="section-container">
        
            <div className="section-sub-menu">
                <CourseSubMenu id={id}/>
            </div>
            
            <div className="section-body">
                
                <div className="section-header">
                {course.name}
                </div>

                    <div className="section-grid course-details">
                        <div className="item">
                            <div className="name">{store.students.byCourse(id).length} Student</div>
                        </div>
                        <div className="item">
                            <div className="name">{store.activities.byCourse(id).length} Activities</div>
                            <hr/>
                            <div className="graph">
                                <Bar
                                    data={data}
                                    options={{
                                    maintainAspectRatio: false
                                    }}
                                />
                            </div>
                            
                        </div>
                    </div>
                    

            </div>
        
        </div>
        
    )
}
export default observer(Course)

