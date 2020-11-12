function Car() {
    this.product = []
}

Car.prototype.settingPart = function(carPart) {
    this.product.push(carPart)
    return this
}

export default Car
