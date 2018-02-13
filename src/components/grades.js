import React, { Component } from 'react'
import '../styles/grades.css'

class Grades extends Component {
    state = {
        sel: 0,
    }

    componentDidMount() {
        console.log(this.el)
        window.addEventListener('keypress', (e) => {
            console.log(e)
            this.setState({sel: parseInt(e.key, 10)})
        })
    }

    render() {
        return (
            <div className="grades" ref={(e) => {this.el = e}}>
                <div className="table">
                    {nameList(this.state.sel)}
                </div>
                {assigmentList()}
            </div>
        )
    }
}

export default Grades

let assignments = [
    {
        id: 0,
        name: 'quiz 1',
        courseId: 0,
        format: 'points',
        weight: 20,
        total: 70,
        grades: [
            {
                studentId: 0,
                grade: 68
            },
            {
                studentId: 1,
                grade: 23
            },{
                studentId: 2,
                grade: 97
            },{
                studentId: 3,
                grade: 12
            }
        ]
    },
    {
        id: 1,
        name: 'exam 1',
        courseId: 0,
        format: 'points',
        weight: 40,
        total: 120,
        grades: [
            {
                studentId: 0,
                grade: 103
            },
            {
                studentId: 1,
                grade: 115
            },{
                studentId: 2,
                grade: 109
            },{
                studentId: 3,
                grade: 98
            }
        ]
    }
]

let students = [
    {
        id: 0,
        name: "Ben"
    },
    {
        id: 1,
        name: "Al"
    },
    {
        id: 2,
        name: "Fran"
    },
    {
        id: 3,
        name: "Ziu"
    }
]

function getStudent(id) {
    return students.filter(n => n.id === id)[0]
}

function nameList(i) {
    let n = assignments[0]
    n.grades.sort((a,b) => {
        return a.studentId - b.studentId
    })
    return (
        <div className="row">
            <span></span>
            {n.grades.map((g,j) => {
                return (
                    <span
                    key={j}
                    className={i === j ? "sel" : null}
                    >{getStudent(g.studentId).name}</span>
                )} 
            )}
        </div>
    )
}

function assigmentList() {
    assignments.forEach(n => {
        n.grades.sort((a,b) => {
            return a.studentId - b.studentId
        })
    })
    return (
        <div className="table">
            {assignments.map((n,i) => {
                return (
                    <div className="row" key={i}>
                        <span className="header">{n.name}</span>
                        {n.grades.map((g,j) => {
                            return (
                                <span key={j}>{g.grade}</span>
                            )} 
                        )}
                    </div>
                )}
            )}
        </div>
    )
}