function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 3000);
  });
}

function login(callback) {
  setTimeout(() => {
    console.log("login");
    callback();
  }, 2000);
}

function emailV() {
  setTimeout(() => {
    console.log("Email Verified");
  }, 2000);
}

function getData() {
  setTimeout(() => {
    console.log("Other Data recieved");
  }, 1000);
}

// callback hell
// register(function () {
//   login(function () {
//     emailV(function () {
//       getData();
//     });
//   });
// });

register().then(emailV).then(getData);

console.log("run first");
