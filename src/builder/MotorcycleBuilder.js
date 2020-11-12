import { defaultConfig }  from '../builderConfig/motorcycle.js'
import { mergeObject } from '../util/util.js'
import { defineEnum } from '../defineEnum/define.js'
import Motorcycle from '../transportation/Motorcycle.js'


const mergeMotorcycleConfig = mergeObject(defaultConfig)
const CarInsatallWay = defineEnum({
    Motorcycle_Head: 'head',
    Motorcycle_Body: 'body',
    Motorcycle_Engine: 'engine'
})

function MotorcycleBuilder (insertConfig) {
    insertConfig = insertConfig || {}
    this.config = mergeObject(defaultConfig,insertConfig)
    this.product = new Motorcycle()
}

MotorcycleBuilder.prototype.installBody = function() {
    console.log('install body')
    this.product.settingPart(`motorcycle ${CarInsatallWay. Motorcycle_Head }`)
    return this
}

MotorcycleBuilder.prototype.installHead = function() {
    console.log('install head')
    this.product.settingPart(`motorcycle ${CarInsatallWay. Motorcycle_Body }`)

    return this
}

MotorcycleBuilder.prototype.installEngine = function() {
    console.log('install engine')
    this.product.settingPart(`motorcycle ${CarInsatallWay. Motorcycle_Engine }`)

    return this
}



Object.defineProperty(MotorcycleBuilder.prototype,'type',{
    value: 'motorcycle',
    enumerable: true
})


let instance = null 
const getInstance = function() {
    if(instance === null) {
        instance = new MotorcycleBuilder()
    }

    return instance
}

export { MotorcycleBuilder ,  mergeMotorcycleConfig , getInstance , CarInsatallWay}
export default getInstance
