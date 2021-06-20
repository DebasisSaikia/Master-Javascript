function login(callback) {
  setTimeout(() => {
    console.log("login");
    callback();
  }, 3000);
}

function register(callback) {
  setTimeout(() => {
    console.log("register");
    callback();
  }, 2000);
}

function emailV(callback) {
  setTimeout(() => {
    console.log("Email Verified");
    callback();
  }, 2000);
}

function getData() {
  setTimeout(() => {
    console.log("Other Data recieved");
  }, 1000);
}

// callback hell
register(function () {
  login(function () {
    emailV(function () {
      getData();
    });
  });
});

console.log("run first");
