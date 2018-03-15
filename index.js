function calculate(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}

function add(a, b) {
    if (Array.isArray(a)) a = calculate(a);
    if (Array.isArray(b)) b = calculate(b);

    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    console.log(a + b);
}

add(10, 20);
add("Mujib ", "Rahman");
add([1, 2, 3], [4, 5, 6]);

function first() {
    return 100;
}

function second() {
    return 200;
}

add(first, second);