const defineEnum = object => {
    try {
      const enumObject = {}
      Object.keys(object).forEach((propsName) => {
        Object.defineProperty(enumObject, propsName, {
          value: object[propsName],
          enumerable: true, // 可列舉
          configurable: false, // 不給予刪除
          writable: false // 不可重新賦值
        })
      })
      return Object.freeze(enumObject)
    } catch (error) {
      return object
    }
  }
  
  // add custom utilities to tailwindcss start
  // flex start
  // flex-basis default config
  const customFlexBasisUtil = defineEnum({
    '.basis-0': {
      'flex-basis': '0'
    },
    '.basis-1\\/2': {
      'flex-basis': '50%'
    },
    '.basis-1\\/3': {
      'flex-basis': '33.333333%'
    },
    '.basis-2\\/3': {
      'flex-basis': '66.666667%'
    },
    '.basis-1\\/4': {
      'flex-basis': '25%'
    },
    '.basis-3\\/4': {
      'flex-basis': '75%'
    },
    '.basis-1\\/5': {
      'flex-basis': '20%'
    },
    '.basis-2\\/5': {
      'flex-basis': '40%'
    },
    '.basis-3\\/5': {
      'flex-basis': '60%'
    },
    '.basis-4\\/5': {
      'flex-basis': '80%'
    },
    '.basis-1\\/6': {
      'flex-basis': '16.666666%'
    },
    '.basis-5\\/6': {
      'flex-basis': '83.333333%'
    },
    '.basis-1\\/12': {
      'flex-basis': '8.333333%'
    },
    '.basis-2\\/12': {
      'flex-basis': '16.666667%'
    },
    '.basis-3\\/12': {
      'flex-basis': '25%'
    },
    '.basis-4\\/12': {
      'flex-basis': '33.333333%'
    },
    '.basis-5\\/12': {
      'flex-basis': '41.666667%'
    },
    '.basis-6\\/12': {
      'flex-basis': '50%'
    },
    '.basis-7\\/12': {
      'flex-basis': '58.333333%'
    },
    '.basis-8\\/12': {
      'flex-basis': '66.666667%'
    },
    '.basis-9\\/12': {
      'flex-basis': '75%'
    },
    '.basis-10\\/12': {
      'flex-basis': '83.333333%'
    },
    '.basis-11\\/12': {
      'flex-basis': '91.666667%'
    }
  })
  
  // add custom utilities to tailwindcss end
  
  module.exports = {
    customFlexBasisUtil
  }
  