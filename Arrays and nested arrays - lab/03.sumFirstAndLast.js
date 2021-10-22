function sum(input) {
    let first = Number(input[0]);
    //console.log(first);
    let end = Number(input[input.length - 1]);
    //console.log(end);
    return first + end;
}


sum("5", "10");

function solve(arr) {
    return Number(arr.pop()) + Number(arr.shift());
}

solve(['20', '30', '40']);
