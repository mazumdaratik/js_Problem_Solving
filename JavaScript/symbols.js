/* var cricket = Symbol('this is crickeet');

var object = {
    name: 'Tamim',
    [cricket]: 3
};

console.log(object); */
var object = {};
object.name = 'JavaScript';
object.estd = '1995';

object[Symbol('founder')] = "Brenden Eich";

console.log(Object.keys(object));