function Motorcycle() {
    this.product = []
}

Motorcycle.prototype.settingPart = function(motorcyclePart) {
    this.product.push(motorcyclePart)
    return this
}

export default Motorcycle