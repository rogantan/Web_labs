document.addEventListener('DOMContentLoaded', () => {
    const answer = document.querySelector('.answer');
    const btn_first = document.getElementById('btn_first');
    function first() {
        const arr = [1, 6, -1, 22, 13];
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        answer.textContent = `Максимум массива: ${max}, минимум массива: ${min}`;
    }
    btn_first.onclick = first;

    const btn_second = document.getElementById('btn_second');
    const answer_sec = document.querySelector('.answer-sec');
    function second() {
        const str = prompt("Введите строку");
        let str1 = "";
        for (let i = str.length - 1; i >= 0; i--) {
            str1 += str[i];
        }
        answer_sec.textContent = "Перевёрнутая строка: " + str1;
    }
    btn_second.onclick = second;

    const btn_third = document.getElementById('btn_third');
    const answer_third = document.querySelector('.answer-third');
    function third() {
        const arr = [3, 5, 8, 13, 21, 42];
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += Math.sqrt(arr[i]);
            }
        }
        answer_third.textContent = `Сумма квадратных корней для всех чётных чисел целочисленного массива: ${sum}`;
    }
    btn_third.onclick = third;

    const btn_fourth = document.getElementById('btn_fourth');
    const answer_fourth = document.querySelector('.answer-fourth');
    function fourth() {
        let str_1 = prompt("Введите первую строку");
        let str_2 = prompt("Введите вторую строку");

        let first = str_1.toLowerCase().split("").sort().join("");
        let second = str_2.toLowerCase().split("").sort().join("");
        let result = "";
        if (first === second) {
            result = "True";
        } else {
            result = "False";
        }
        answer_fourth.textContent = result;
    }
    btn_fourth.onclick = fourth;

    const btn_fifth = document.getElementById('btn_fifth');
    const answer_fifth = document.querySelector('.answer-fifth');
    function fifth() {
        const str = prompt("Введите строку").replaceAll(' ', '').toLowerCase();
        console.log(str);
        let str1 = "";
        for (let i = str.length - 1; i >= 0; i--) {
            str1 += str[i];
        }
        console.log(str1);
        let result = "";
        if (str === str1) {
            result = "True";
        } else {
            result = "False";
        }
        answer_fifth.textContent = result;
    }
    btn_fifth.onclick = fifth;

    const btn_sixth = document.getElementById('btn_sixth');
    function fib(x) {
        if (x === 0) return 0;
        if (x === 1) return 1;
        return fib(x - 1) + fib(x - 2);
    }
    function couneter1() {
        let k = 0;
        const timer = setInterval(() => {
            console.log(fib(k));
            k++;
            if (k === 15) {
                clearInterval(timer);
            }
        }, 1000);
    }
    function sixth() {
        couneter1();
    }
    btn_sixth.onclick = sixth;

    const btn_seventh = document.getElementById('btn_seventh');
    const answer_seventh = document.querySelector('.answer-seventh');
    function seventh() {
        const arrA = [1, 6, -1, 22, 13];
        const arrB = [1, 6, -5, 45, 13];
        let result = "";
        const intersaction = arrA.filter(value => arrB.includes(value));
        for (let i = 0; i < intersaction.length; i++) {
            result += `${intersaction[i]} `;
        }
        answer_seventh.textContent = result;
    }
    btn_seventh.onclick = seventh;

    let count = 42;
    const counter = document.getElementById('counter');
    updateDisplay()
    function updateDisplay() {
        counter.innerText = `${count}`;
    }
    function plus() {
        count++;
        updateDisplay();
    }
    function minus() {
        count--;
        updateDisplay();
    }
    const btn_plus = document.getElementById('btn_plus');
    const btn_minus = document.getElementById('btn_minus');
    btn_minus.onclick = minus;
    btn_plus.onclick = plus;
    counter.innerText = `${count}`;

    function eight() {
        for(let i = 1; i <= 3; i++) {
            setTimeout(() => console.log(i), 1000);
        }
    }
    const btn_eight = document.getElementById('btn_eight');
    btn_eight.onclick = eight;
});
