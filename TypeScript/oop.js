var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("username: ".concat(this.userName, " and age: ").concat(this.age));
    };
    return Person;
}());
// let person1 = new Person("Atik", 25);
// console.log(person1);
// let person2 = person1.userName;
// console.log(person2);
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(userName, age, personId) {
        var _this = _super.call(this, userName, age) || this;
        _this.userName = userName;
        _this.age = age;
        _this.personId = personId;
        return _this;
    }
    return Details;
}(Person));
var person1 = new Details('Atik', 24, 101);
console.log(person1);
person1.personId;
console.log(person1);
