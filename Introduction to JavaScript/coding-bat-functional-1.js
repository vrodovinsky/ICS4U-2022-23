function doubling(list) {
    let result = [];
    list.forEach(function value(v, i){
        result[i] = v * 2;
    });
    return result;
}
let a = [1, 2, 3];
console.log(doubling(a));

function square(list) {
    let result = [];
    list.forEach(function value(v, i){
        result[i] = v * v ;
    });
    return result;
}

let a2 = [1, 2, 3];
console.log(square(a2));

function addStar(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v + "*";
    })
    return result;
}

let a3 = ["a", "b", "c"];
console.log(addStar(a3));

function copies3(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v + v + v;
    })
    return result;
}

let a4 = ["aa", "b", "cccc"];
console.log(copies3(a4));

function moreY(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = "y" + v + "y";
    })
    return result;
}

let a5 = ["aa", "b", "cccc"];
console.log(moreY(a5));

function math1(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = (v + 1) * 10;
    })
    return result;
}

let a6 = [1, 2, 3];
console.log(math1(a6));

function rightDigit(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v%10;
    })
    return result;
}

let a7 = [1, 22, 93];
console.log(rightDigit(a7));

function lower(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v.toLowerCase();
    })
    return result;
}

let a8 = ['HELLO', 'HI'];
console.log(lower(a8));

function noX(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v.replace(/x/g, "");
    })
    return result;
}

let a9 = ["xxax", "xbxbx", "xxcx"]
console.log(noX(a9));