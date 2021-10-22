function printCalorieObject(strArray) {

    function getCalorieObject(strArr) {
        let result = {};

        for (let i = 0; i < strArr.length - 1; i += 2) {
            result[strArr[i]] = Number(strArr[i + 1]);
        }

        return result;
    }

    console.log(getCalorieObject(strArray));
}

printCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);