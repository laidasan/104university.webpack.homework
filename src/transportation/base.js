function TransPortation() {
    this.product = []
}

TransPortation.prototype.settingPart = function(part) {
    this.product.push(part)
    return this
}

export default Car