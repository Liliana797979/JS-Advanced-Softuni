function greatest(a, b) {
    while(b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

greatest(15, 5);