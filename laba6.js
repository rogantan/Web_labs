function first() {
    const arr = [5, 7, 89, 54, 99];
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let result = max - min;
    alert(result);
}

function second() {
    const arr = [5, 7, 89, 54, 99, 5, 54];
    const arr1 = [... new Set(arr)];
    // const arr1 = new Array(arr.length);
    // for (let i = 0; i < arr.length; i++) {
    //     if (!arr1.includes(arr[i])) {
    //         arr1.push(arr[i]);
    //     }
    // }
    alert(arr1);
}

function third() {
    const arr = [
        {id: 1, idDone: true},
        {id: 2, idDone: false},
        {id: 3, idDone: true}
    ];
    const arr1 = arr.filter(value => value.idDone === true);
    for (let i = 0; i < arr1.length; i++) {
        alert(arr1[i].id);
    }
}

function fourth() {
    const arr = [1, 4, 6, 3, 2];
    let num = Number(prompt());
    const arr1 = arr.filter(value => value > num);
    alert(arr1);
}

function print_array(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(print_array(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}

function fifth() {
    const arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
    const res = print_array(arr);
    alert(res);
}



function sixth() {

}