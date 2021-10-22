function sorting(arr) {
    arr = arr.sort((a,b) =>{
        return a-b;
    })
    const result = [];
    while (arr.length != 0) {
        result.push(arr.shift(), arr.pop());
    }
    return result;
}
