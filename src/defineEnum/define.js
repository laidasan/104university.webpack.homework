const getObjectKeys = function (object) {
    return Object.keys(object)
  }
  
  
  // defineProperty Fucntion 
  const createDefineFn = (config = {}) => (source , target , propName) => {
    Object.defineProperty(target,propName,{
      value: source[propName],
      ...config
    })
  }
  
  
  /**
   * @function
   * @decc 建立一個 read only 且可列舉 的 defineProperty method
   */
  const defineReadOnlyFn = createDefineFn({
    writable: false,
    enumerable: true,
    configurable: false,
  })
  
  /**
   * @function
   * @decc 建立一個 read only 且不可列舉的 defineProperty method
   */
  const defineLockFn = createDefineFn()
  
  
  const useDefineFn = (defineFn) => (source) => {
    const enumObject = {}
    try {
        // console.log(getObjectKeys(source))
      getObjectKeys(source).forEach(propName => defineFn(source,enumObject,propName))
      return Object.freeze(enumObject)
    } catch(err) {
      console.error(err)
      return source
    }
  }
  
  
  const defineEnum = useDefineFn(defineReadOnlyFn)
  const defineLock= useDefineFn(defineLockFn)
    
  export { defineEnum , defineLock }
  export default {
    defineEnum,
    defineLock
  }
  