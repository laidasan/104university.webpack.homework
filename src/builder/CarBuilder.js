import { defaultConfig }  from '../builderConfig/car.js'
import { mergeObject } from '../util/util.js'
import { defineEnum ,defineLock } from '../defineEnum/define.js'
import Car from '../transportation/Car.js'


const CarInsatallWay = defineEnum({
    Car_Head: 'head',
    Car_Body: 'body',
    Car_Engine: 'engine'
})

const mergeCarConfig = mergeObject(defaultConfig)

function CarBuilder (insertConfig) {
    insertConfig = insertConfig || {}
    this.config = mergeCarConfig(insertConfig)
    this.product = new Car()
}


CarBuilder.prototype.installHead = function(config = {}) {
    console.log('install head')
    this.product.settingPart(`car ${CarInsatallWay.Car_Head}`)

    return this
}

CarBuilder.prototype.installBody = function(config = {}) {
    console.log('install body')
    this.product.settingPart(`car ${CarInsatallWay.Car_Body}`)
    return this
}



CarBuilder.prototype.installEngine = function(config = {}) {
    console.log('install engine')
    this.product.settingPart(`car ${CarInsatallWay.Car_Engine}`)

    return this
}


Object.defineProperty(CarBuilder.prototype,'type',{
    value: 'car',
    enumerable: true
})

let instance = null 
const getInstance = function() {
    if(instance === null) {
        instance = new CarBuilder()
    }

    return instance
}

export { CarBuilder , CarInsatallWay , mergeCarConfig , getInstance}
export default getInstance
