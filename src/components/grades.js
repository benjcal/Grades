import React, { Component } from 'react'
import '../styles/grades.css'

let a = [1,2,3,4,5,6,7,8,9,0]

class Grades extends Component {

    render() {
        return (
            <div className="grades">
                {a.map((n, i) => <h1 key={i}>{n}</h1>)}
            </div>
        )
    }
}

export default Grades
