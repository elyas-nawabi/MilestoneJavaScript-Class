// var objectLiteral = new Object();
var objectLiteral = {
    name:'ahmad',
    address:{
        street: 'kabul',
        city: 'kabul'
    }
}
console.log(JSON.stringify(objectLiteral))

var jsonValue = '{ "name" : "ahmad", "address": {"stree":123,"city":"kabul" }}';
console.log(JSON.parse(jsonValue));