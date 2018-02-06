import React, { Component } from 'react'
import '../css/courses.css'

class Courses extends Component {
    render() {
        return (
            <div className="courses">
                <a href=""><div className="course" id="color1"><i className="fa fa-calculator"></i><br />Math</div></a>
                <a href=""><div className="course" id="color2"><i className="fa fa-flask"></i><br />Science</div></a>
                <a href=""><div className="course" id="color3"><i className="fa fa-desktop"></i><br />Computer</div></a>
                <a href=""><div className="course" id="color4"><i className="fa fa-paint-brush"></i><br />Arts</div></a>
                <a href=""><div className="course" id="color5"><i className="fa fa-globe"></i><br />Geology</div></a>
                <a href=""><div className="course" id="color6"><i className="fa fa-book"></i><br />History</div></a>
            </div>
        )
    }
}

export default Courses
