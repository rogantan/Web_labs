function reverse(number) {
    let str = "";
    for (let i = number.length - 1; i >= 0; i--) {
        str += number[i];
    }
    return str;
}

function first() {
    let number = String(prompt())
    alert(reverse(number));
}

function second() {
    let number = String(prompt()).split('');
    let unique = [];
    for (let digit of number ) {
        if (!unique.includes(digit)) {
            unique.push(digit);
        }
    }
    alert(unique.join(''));
}

function third() {
    let numbers = Number(prompt());
    let number = Number(prompt());
    let k = 0;
    while (numbers !== 0) {
        let b = numbers % 10;
        if (b === number) {
            k = k + 1;
        }
        numbers = Math.floor(numbers / 10);
    }
    alert(k);
}


function fourth() {
    let number = Number(prompt());
    let bin = number.toString(2);
    let count = 1;
    let max = 0;
    for (let i = 1; i < bin.length; i++) {
        if (bin[i] === bin[i - 1]) {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            count = 1;
        }
    }
    if (count > max) {
        max = count;
    }
    alert(max);
}

function fifth() {
    let str = String(prompt());
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            alert(str[i]);
            break;
        }
    }
}

function sixth() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    let len = Number(prompt());
    let result = "";
    let index;
    while (result.length < len) {
        index = Math.floor(Math.random() * alphabet.length);
        result += alphabet[index];
    }
    alert(result);
}

function seventh() {
    let str = String(prompt());
    let unique = new Set(str);
    alert([...unique].join(''));
}