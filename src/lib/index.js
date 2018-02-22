export function toByIdStudents(students) {
    let byId = {}

    students.map(n => 
        byId[`student${n.id}`] = n
    )
    
    return byId
}