import React from 'react'
import { Link } from 'react-router-dom'
import store from 'store/store'
import 'css/home.css'

const Home = () => {
    let { students, courses, activities } = store
    return (
        <div className="home-view">
            <div className="overview courses">
                <div className="name">Courses</div>
                <hr/>
                <div className="list">
                    {courses.values().map(c =>
                        <Link to={`course/${c.id}`}><b>{c.name}</b> Students: <b>{students.byCourse(c.id).length}</b></Link>)}
                </div>
            </div>
            <div className="overview students">
                <div className="name">Students</div>
                <hr/>
                <div className="list">
                    {students.values().map(s =>
                        <Link to={`student/${s.id}`}>{s.name}</Link>)}
                </div>
            </div>
            <div className="overview activities">
                <div className="name">Activities</div>
                <hr/>
                <div className="list">
                    {activities.values().map(s =>
                        <Link to={`activity/${s.id}`}>{s.name} <b>Average Score:</b> {s.average()}%</Link>)}
                </div>
            </div>
            {/* <div className="overview"></div> */}
        </div>
    )
}

export default Home