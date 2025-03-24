// document.addEventListener('DOMContentLoaded', function() { // когда весь HTML загружен
//
//     setTimeout(function() { // таймер-планировщик
//         document.getElementById('btn-first').click(); // вызвать клик на кнопку
//     }, 2000); // через две секунды
//
// });

function first() {
    name = "Джон";
    admin = name;
    alert(admin);
}

function second() {
    let a = Number(prompt("Первое число?", 1));
    let b = Number(prompt("Второе число?", 2));

    alert(a + b); // 12
}

function third() {
    for (let i = 2; i < 11; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}

function fourth() {
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i = i + 1;
    }
}

function fifth() {
    let number = 100;
    while (true) {
        const input = prompt("Введите число большее 100");
        number = Number(input);
        if (input === null || number > 100) {
            break;
        }

    }
}

function simple(a) {
    let k = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            k = k + 1;
        }
    }
    return k;
}

function sixth() {
    let n = Number(prompt("Введите n"));
    for (let i = 2; i <= n; i++) {
        if (simple(i) == 2) {
            alert(i);
        }
    }
}