import Vue from 'vue'
import App from './App.vue'


new Vue({
    render: h => h(App)
}).$mount('#app')
// adapter pattern
// import calc from './calc.js'

// const go = function (calcObj) {
//     let calc = calcObj.adapter
//     return calc.add(1,2)
// }

// console.log(go(calc))



// builder pattern
// import getCarBuilder from './builder/CarBuilder.js'
// import getMotorcycleBuilder from './builder/MotorcycleBuilder.js'
// import Director from './builder/Director.js'
// import calc from './calc.js'

// const carBuilder = getCarBuilder()
// const director = new Director(carBuilder)
// const car = director.installBase().getProduct()
// director.reset().setBuilder(getMotorcycleBuilder())
// const motorcycle = director.installBase().getProduct()
// console.log(motorcycle)
// console.log(car)



// 
const useCalcObj = (calcObj) => (calcName) => (...rest) => {
    return calcObj[calcName].apply(calcObj,rest)
}


// import 
const calcObj = {
    add: function(a,b) {
        return a + b
    },
    sub: function(a,b) {
        console.log('sub')
        return a - b
    }
}

const myCalcObj = useCalcObj(calcObj)

const myAdd = myCalcObj('add')
const mySub = myCalcObj('sub')

console.log(myAdd(1,2))


// ...rest 編譯後樣子
// 也是從 arguments 取出
// for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
//     rest[_key] = arguments[_key];
//   }



// Strategy Pattern
function addStag ( a , b ) {
    return a + b
}


function Stag(stag) { 
    this.now = 0
    this.stag = stag || addStag
}

Stag.prototype.setStag = function(stag) {
    this.stag = stag
}

Stag.prototype.reset = function() {
    this.now = 0
}

Stag.prototype.excute = function(...rest) {
    this.now = this.stag.apply(this,rest)
    return this
}

Stag.prototype.getNow = function() {
    return this.now
}

const stagObj = new Stag(addStag)
stagObj.excute(3,2).getNow()
