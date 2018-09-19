function(type) {
    return function(obj){
        return Object.proptotype.toString.call(obj) === `[object ${type}]`
    }
}