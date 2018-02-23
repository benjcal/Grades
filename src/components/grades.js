import React, { Component } from 'react'
import { toById } from '../libs/lib'
import studentsData from '../data/students.json'
import '../styles/grades.css'

let o = toById('student', studentsData)

class Grades extends Component {
    state = {
        sel: 0,
        

    }

    componentDidMount() {
        window.testFn = function(e) {
            if (e.shiftKey && e.code === "Space") {
                alert('Shift + Space pressed')
            }
        }
        window.addEventListener('keypress', window.testFn)

        Object.keys(toById('student', studentsData))

    }

    componentWillUnmount() {
        window.removeEventListener('keypress', window.testFn)
        delete window.testFn
    }

    render() {
        return (
            <div className="grades">
                <div className="table">
                    {nameList()}
                </div>
                
            </div>
        )
    }
}

export default Grades

// let assignments = [
//     {
//         id: 0,
//         name: 'quiz 1',
//         courseId: 0,
//         format: 'points',
//         weight: 20,
//         total: 70,
//         grades: [
//             {
//                 studentId: 0,
//                 grade: 68
//             },
//             {
//                 studentId: 1,
//                 grade: 23
//             },{
//                 studentId: 2,
//                 grade: 97
//             },{
//                 studentId: 3,
//                 grade: 12
//             }
//         ]
//     },
//     {
//         id: 1,
//         name: 'exam 1',
//         courseId: 0,
//         format: 'points',
//         weight: 40,
//         total: 120,
//         grades: [
//             {
//                 studentId: 0,
//                 grade: 103
//             },
//             {
//                 studentId: 1,
//                 grade: 115
//             },{
//                 studentId: 2,
//                 grade: 109
//             },{
//                 studentId: 3,
//                 grade: 98
//             }
//         ]
//     }
// ]

// let students = [
//     {
//         id: 0,
//         name: "Ben"
//     },
//     {
//         id: 1,
//         name: "Al"
//     },
//     {
//         id: 2,
//         name: "Fran"
//     },
//     {
//         id: 3,
//         name: "Ziu"
//     }
// ]

function nameList(i) {
    return (
        <div className="row">
            <span></span>
            {Object.keys(o).map((n,j) => {
                return (
                    <span
                    key={j}
                    className={i === j ? "sel" : null}
                    >{o[n].first_name} {o[n].last_name}</span>
                )} 
            )}
        </div>
    )
}

// function assigmentList() {
//     assignments.forEach(n => {
//         n.grades.sort((a,b) => {
//             return a.studentId - b.studentId
//         })
//     })
//     return (
//         <div className="table">
//             {assignments.map((n,i) => {
//                 return (
//                     <div className="row" key={i}>
//                         <span className="header">{n.name}</span>
//                         {n.grades.map((g,j) => {
//                             return (
//                                 <span key={j}>{g.grade}</span>
//                             )} 
//                         )}
//                     </div>
//                 )}
//             )}
//         </div>
//     )
// }