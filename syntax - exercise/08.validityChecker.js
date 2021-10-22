function solve(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
 
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
 
    console.log(Number.isInteger(result(x1, y1))
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(result(x2, y2))
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);
 
    console.log (Number.isInteger(result((x1-x2), (y1-y2)))
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
 
 
    function result(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}



function validDistance(x, y, x1, y1) {
    const isValidDist = (x, y, x1, y1) =>
        Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0
        // % 1  checks if number is integer
    const pairs = [
        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],
    ]
    const printMsg = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x, i) =>
        console.log(isValidDist(...pairs[i]) ? printMsg(...x, "valid") : printMsg(...x, "invalid"))
    )
}



function data(x1, y1, x2, y2) {

    result(x1, y1, 0, 0);

    result(x2, y2, 0, 0);

    result(x1, y1, x2, y2);

    function result(x1, y1, x2, y2) {

        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

        const validString = Number.isInteger(distance) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);


    }
}
