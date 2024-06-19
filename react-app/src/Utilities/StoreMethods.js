

export const findObjectById = (objs, id) => {
    return objs.find((obj) => obj.id === id)
}


export const filterObjsById = (objs = [], id) => {
    return objs.filter((obj) => obj.id !== id)
}
