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

 

function createCounter(n) {
    let counter = n;
    let intervalId = null;
    let isPausesd = false;
    return {
        start() {
            if (intervalId !== null || counter <= 0) return;
            intervalId = setInterval(() =>  {
                if (!isPausesd) {
                console.log(counter);
                counter--;
                if (counter < 0) {
                    this.stop();
                }
            }
        }, 1000);
        },

        pause() {
            isPausesd = !isPausesd;
        },
        stop() {
            if (intervalId !== null) {
                clearInterval(intervalId);
                intervalId = null;
            }
            counter = n;
            isPausesd = false;
        }
    }
}

function second() {
    const number = createCounter(5);
    number.start();
    setTimeout(() => number.pause(), 1000);
    setTimeout(() => number.pause(), 5000);
    setTimeout(() => number.stop(), 6000);
} 

function delay(n) {
}

function third() {
    const promise = new Promise((resolve, reject) => {
          reject("result");
      });
    promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );
}