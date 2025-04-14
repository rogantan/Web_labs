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
    return new Promise((resolve) => 
        {setTimeout(resolve, n * 1000) });
}

function third() {
    let n = Number(prompt("Введите n"));
    delay(n).then(result => alert("Всё гуд!"));
}

function fourth() {
    let n = Number(prompt("Введите n"));
    let promise = Promise.resolve();
    for (let i = n; i >= 0; i--) {
        promise = promise.then(() => {
            return delay(1).then(() => {
                console.log(i);
            });
        });
    }
}

function fifth() {
    let promise = fetch('https://api.github.com/users/%USERNAME%').
    then((response) => response.json()
    .then(userData => {
        const reposUrl = userData.reposUrl;
        return fetch(reposUrl);
    })
    .then(response => {
        return response.json();
    })
    .then(reposeData => {
        const first = reposeData[0].name;
        alert(first);
    })
);
}

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  // Запрашивается логин, пока github не вернёт существующего пользователя.
  function getGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
  
    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        alert(`Полное имя: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
  getGithubUser();