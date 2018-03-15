import { Calculator } from "./calc";

class MyClass {

    prop: string = "ABC";

    myMethod() {
        var calc = new Calculator();
        var result = calc.add(20, 30);
        console.log(result);
    }
}

//transpilation
var mc = new MyClass();
mc.myMethod();