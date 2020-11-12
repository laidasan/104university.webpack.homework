const isNum = function(...rest) {
    return rest.every((num) => {
        return num === num && typeof num === 'number'
    })
}


export const add = function(a,b) {
    if(!isNum(a,b)) return
    return a + b
}
export const sub = function(a,b) {
    if(!isNum(a,b)) return
    return a - b
}

export default {
    add,
    sub
}
