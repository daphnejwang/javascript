function fibonacciSet(max) {
    if (max > 1) {
        var fibList = [1];
        var currentFib = 1;
        for (var i = 1; i < max; i) {
            fibList.push(i);
            currentFib = 
              fibList[fibList.length-1] +                         
              fibList[fibList.length-2];
            console.log("end of while:" + currentFib);
            i =  currentFib;
        }
        return fibList;
    }    
    else {
        return [1, 1];
    }
}

// Tell me if a number is even
function even(n) {
    return n % 2 === 0;
}

function sum(l) {
    var result = 0;
    for (var i = 0; i < l.length; i++) {
        result = result + l[i];
    }
    return result;
}

function filter(fn, l) {
    var out_list = [];
    for (var i = 0; i < l.length; i++) {
        var item = l[i];
        if (fn(item) === true) {
            out_list.push(item);
        }
    }
    return out_list;
}

console.log(sum(filter(even,fibonacciSet(4000000))));