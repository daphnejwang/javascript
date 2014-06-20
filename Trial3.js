var arr = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false]

var results = [];
var sorted_arr = arr.sort();
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
        if (results.indexOf(arr[i]) === -1){
            results.push(sorted_arr[i]);
        }
    }
}

console.log(results);
//other teams assigned each value of arr into a key of a dict.
//if there is a repeat, they assigned another 1 value to that key
//return a list of all keys with values less than 1
{
    "katie": [1],
    "true": [1,1],
}