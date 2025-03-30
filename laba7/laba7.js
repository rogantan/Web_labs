function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function first() {
    function * generator(n, m) {
        while (true) {
            yield getRandomInt(n, m);
        }
    }
    const gen = generator(1, 5);
    let k = 0;
    while (k <= 10) {
        alert(gen.next().value);
        k++;
    }
}

function recursion(n) {
    if (n === 0 || n === 1 || n === 2) {
        return 1;
    }
    return recursion(n - 2) + recursion(n - 3);
}

function second() {
    function * generator() {
        let count = 1;
        while (true) {
            yield recursion(count);
            count++;
        }
    }
    let k = 0;
    const gen = generator()
    while (k <= 10) {
        alert(gen.next().value);
        k++;
    }
}

function IsPrime(num) {
    if (num < 2) return false; // Числа меньше 2 не являются простыми
    for (let i = 2; i * i  <= num; i++) {
        if (num % i === 0) return false; // Если делится на другое число без остатка, то не простое
    }
    return true;
}
function third() {
    function * generator() {
        let count = 2;
        while (true) {
            if (IsPrime(count)) {
                yield count;
            }
            count++;
        }
    }
    const gen = generator();
    let k = 0;
    while (k <= 10) {
        alert(gen.next().value);
        k++;
    }
}

function sym_count(sym, str) {
    let k = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sym) {
            k++;
        }
    }
    return k;
}

function fourth() {
    let str = prompt();
    const unique = new Set(str);
    let map = new Map();
    for (let char of unique) {
        map.set(char, sym_count(char, str));
    }
    alert(JSON.stringify(Object.fromEntries(map)));
}

function fifth() {
    function * generator() {
        let count = 0;
        while (true) {
            if (IsPrime(count)) {
                yield count;
            }
            count++;
        }
    }
    const gen = generator();
    let n = Number(prompt());
    let k = 0;
    while (k <= n) {
        let res = gen.next().value;
        if (k === n) {
            alert(res);
        }
        k++;
    }
}