function smallestTwo(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}


console.log(smallestTwo([30, 15, 50, 5]));