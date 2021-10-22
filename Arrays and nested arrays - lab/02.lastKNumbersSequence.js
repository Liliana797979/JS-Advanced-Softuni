function lastKNumbersSequence(n, k) {
    let result = [1];
 
    for(let i=1; i<n; i++) {
         let startIndex = Math.max(0, i-k);
         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }
 
    return result;
 }
 


 function foo(n, k) {
    const arr = [1];
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, v) => a + v, 0))
    }
    return arr;
}




function lastK (n, k) {
    let arr = [1];
    for (i=0; i<n-1; i++){
        let sum = arr.slice(-k);
        sum = sum.reduce((a, b) => a + b, 0);
        arr.push(sum);
    }
    return arr;
}


