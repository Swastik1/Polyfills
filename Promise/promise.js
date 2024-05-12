// Promise basics
// state - initital, fullfilled (resolved) , reject (operation failed)
// constructor function - takes executor function as an argument which recieves - resolve & reject

const promise = new Promise((resolve, reject) => {
  resolve(1);
  setTimeout(() => {
    let randomNumber = Math.random();
    randomNumber >= 0.5
      ? resolve("Success")
      : reject(new Error("Operation Failed!"));
  }, 1000);
});

promise
  .finally(() => console.log("Promise ready!")) // finally doesn't take any arguments, used for generic cleanup no matter the whatever the result!
  .then((result) => {
    console.log("Promise resolved : ", result);
  })
  .catch((error) => {
    console.log(error);
  });

// ----- Tasks -----

// Task 1
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, ms);
  });

  return promise;
}

delay(3000).then(() => console.log("runs after 3 seconds"));

// Task 2

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";
      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
      });
      resolve(div);
    });
  });

  return promise;
}

showCircle(150, 150, 100).then((div) => {
  div.classList.add("message-ball");
  div.append("Hello, world!");
});
