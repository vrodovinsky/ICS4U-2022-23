
function word0(x) {

    let map = {};
    x.forEach(function mapper(v) { map[v] = 0; });
    console.log(JSON.stringify(map));
}

let a1 = ["a", "b", "c", "b"]

word0(a1);

function wordCount(x) {
    let map = {};
    x.forEach(function mapper(v) {
         if (map[v]) {
            map[v] = map[v] + 1;
        }
        else {
            map[v] = 1;
        }
    })

    let map2 = {};
    Object.keys(map).forEach(function mapper2(v) {
        map2[v] = map[v];
    });
     console.log(JSON.stringify(map2));
}

let a2 = ["a", "b", "c", "b", "c"]

wordCount(a2);


function wordLen(x) {

    let map = {};
    x.forEach(function mapper(v) {
        map[v] = v.length;
    });
    console.log(JSON.stringify(map));
}

let a3 = ["a", "bb", "c", "bbb"]

wordLen(a3);


function wordMultiple(x) {
    
    let map = {}
    x.forEach(function mapper(v) {
      //  map[v] = map[v] ? map[v] + 1 : 1;
        if (map[v]) {
            map[v] = map[v] + 1;
        }
        else {
            map[v] = 1;
        }
    });
    
    let map2 = {};
    Object.keys(map).forEach(function mapper2(v) {
        map2[v] = map[v] > 1;
    });
     console.log(JSON.stringify(map2));
}

let a4 = ["a", "b", "a", "c", "c"];

wordMultiple(a4);

function pairs(x) {
    let map = {};
    x.forEach(function mapper(v) {
        map[v.slice(0, 1)] = v.slice(-1);
    });
    console.log(JSON.stringify(map));
}

let a5 = ["man", "moon", "main"];

pairs(a5);

function firstChar(x) {
    let map = {};
    x.forEach(function mapper(v) {
        if (map[v.charAt(0)])
            map[v.charAt(0)] = map[v.charAt(0)] + v;
        else {
            map[v.charAt(0)] = v;
        }
    });
    console.log(JSON.stringify(map));
}

let a6 = ["salt", "tea", "soda", "toast"];
firstChar(a6);

function wordAppend(x) {
    let map = {};
    let result = "";
    x.forEach(function mapper(v) {
        if (map[v]) {
            map[v] = map[v] + 1;
        }
        else {
            map[v] = 1;
        }

        if (map[v] % 2 == 0)
        result += v;
    });
    console.log(result);
}

let a7 = ["a", "b", "a", "c", "a", "d", "a"];
wordAppend(a7);

function allSwap(x) {
    let map = new Map();
    x.forEach(function mapper(v, i, a) {
        if ( map.has(v.charAt(0)) ) {
            let temp = a[map.get(v.charAt(0))];
            a[map.get(v.charAt(0))] = v;
            a[i] = temp;
            map.delete(v.charAt(0));
        } else {
            map.set(v.charAt(0), i);
        }
    });
    console.log(x);
}

let a8 = ["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"];
allSwap(a8);

function firstSwap(x) {
    let map = new Map();
    x.forEach(function mapper(v, i, a) {
        if ( map.has(v.charAt(0)) && map.get(v.charAt(0)) != -1 ) {
            let temp = a[map.get(v.charAt(0))];
            a[map.get(v.charAt(0))] = v;
            a[i] = temp;
            map.set(v.charAt(0), -1);
        } else {
            if (!map.has(v.charAt(0))) {
                map.set(v.charAt(0), i);
            }
        }
    });
    console.log(x);
}

let a9 = ["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"];
firstSwap(a9);

