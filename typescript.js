"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.prop = "ABC";
    }
    MyClass.prototype.myMethod = function () {
        var calc = new Calculator();
        var result = calc.add(20, 30);
        console.log(result);
    };
    return MyClass;
}());
//transpilation
var mc = new MyClass();
mc.myMethod();
