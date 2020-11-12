export const isNil = function(val) {
    return val === null || val === undefined
}

export const isObject = function(val) {
    !isNil(val) && typeof val === 'object'
}

export const isRealObject = function(val) {
    !isNil(val) && val instanceof Object
}

export const mergeObject= (source) => (target) => {
    try {
        return {
            ...source,
            ...target
        }
    } catch(error) {
        console.error(error)
        return source
    }
}


