import React, { Component } from 'react'
import '../styles/grades.css'

class Grades extends Component {

    render() {
        return (
            <div className="grades">
                <table>
                    <tbody>
                    <tr>
                    <td>Name</td>
                        {assignments.map((n,i) =>
                            <td key={i}>{n.name}</td>
                        )}
                        </tr>
                        {students.map((n,i) => 
                        <tr key={i}>
                            <td>{n.name}</td>
                            {n.grades.map((grade, i) => 
                                <td key={i}>{grade.grade}</td>
                            )}
                        </tr>
                        )}
                    </tbody>
                </table>
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
        total: 70
    },
    {
        id: 1,
        name: 'exam 1',
        courseId: 0,
        format: 'points',
        weight: 40,
        total: 120,
    }
]

let students = [
    {
        id: 0,
        name: "Ben",
        grades: [
            {id: 0, grade: 73},
            {id: 1, grade: 92}
        ]
    },
    {
        id: 1,
        name: "Al",
        grades: [
            {id: 0, grade: 57},
            {id: 1, grade: 18}
        ]
    },
    {
        id: 2,
        name: "Fran",
        grades: [
            {id: 0, grade: 24},
            {id: 1, grade: 78}
        ]
    },
    {
        id: 3,
        name: "Ziu",
        grades: [
            {id: 0, grade: 99},
            {id: 1, grade: 13}
        ]
    }
]