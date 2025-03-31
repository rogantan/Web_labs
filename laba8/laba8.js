function counter(n) {
    const timer = setInterval(() => {
        console.log(n);
        n--;
        if (n < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function first() {
    let n = prompt();
    counter(n);
}