function bigger(input) {
    input.sort((a,b) => a - b);
    const middle = Math.floor(input.length / 2);
    const result = input.slice(middle);

    return result;
}

console.log(bigger([3, 19, 14, 7, 2, 19, 6]));