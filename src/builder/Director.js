import { mergeObject } from "../util/util"
import { mergeCarConfig } from './CarBuilder.js'
import { mergeMotorcycleConfig } from './MotorcycleBuilder.js'

const mergeConfigWith = {
    car: mergeCarConfig,
    motorcycle: mergeMotorcycleConfig
}

function Director(builder) {
    this.builder = builder
    this.nowBuilderType = builder.type || undefined
} 

Director.prototype.reset = function() {
    this.builder = null
    return this
}

Director.prototype.installBase= function(config = {}) {
    if(this.nowBuilderType) config = mergeConfigWith[this.nowBuilderType](config)
    const builder = this.builder
    builder.installHead(config)
           .installBody(config)
           .installEngine(config)
    return this
}

Director.prototype.getProduct = function() {
    return this.builder.product
}


Director.prototype.setBuilder = function(builder) {
    this.reset()
    this.builder = builder
    return this
}


let instance = null 
const getInstance = function() {
    if(instance === null) {
        instance = new Director()
    }

    return instance
}

export { Director , getInstance }

export default Director