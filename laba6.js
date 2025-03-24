function first() {
    const arr = [1, 2, 3, 4, 5, 6];
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let raz = max - min;
    return raz;
}

