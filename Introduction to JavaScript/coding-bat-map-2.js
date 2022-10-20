
function word0(x) {

    let map = {};
    x.forEach(function mapper(v) { map[v] = 0; });
    console.log(JSON.stringify(map));
}

let a1 = ["a", "b", "c", "b"]

word0(a1);


function wordLen(x) {

    let map = {};
    x.forEach(function mapper(v) {
        map[v] = v.length;
    });
    console.log(JSON.stringify(map));
}

let a2 = ["a", "bb", "c", "bbb"]

wordLen(a2);


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

let a3 = ["a", "b", "a", "c", "c"];

wordMultiple(a3);



