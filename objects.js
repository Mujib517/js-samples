//4 
    var obj = {
        width: 5,
        height: 1,
        color: 'Black',
        'my property': 'my value',
        on: function () {
            console.log("Switched on");
        },

        off: function () {
            console.log("Switched off");
        }
    };

//reflection
for (var key in obj) {
    console.log(key, obj[key]);
}
