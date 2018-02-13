import React, { Component } from 'react'
import '../styles/grades.css'

class Grades extends Component {

    render() {
        return (
            <div className="grades">
                <div className="table">
                    {assignments.map(n => {
                        n.grades.sort((a,b) => {
                            return a.grade - b.grade
                        })
                        return (
                            <div className="row">
                                <span>{n.name}</span>
                                {n.grades.map(g => {
                                    return (
                                        <span>grade: {g.grade} id: {getStudent(g.studentId).name}</span>
                                    )} 
                                )}
                            </div>
                        )}
                    )}
                </div>
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