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

    }
});
