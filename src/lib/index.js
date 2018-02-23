export function toById(type, object) {
    let byId = {}

    object.map(n => 
        byId[`${type}${n.id}`] = n
    )

    return byId
}