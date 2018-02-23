export function toById(type, object) {
    let byId = {}

    object.map(n => 
        byId[n.id] = n
    )

    return byId
}