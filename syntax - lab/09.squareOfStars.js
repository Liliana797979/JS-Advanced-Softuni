function data(input) {
    let result = '';

    for (let i = 1; i <= +input; i++) {
        for (let k = 1; k <= +input; k++) {
            result += '* ';
        }
        console.log(result);
        result = '';
    }
}