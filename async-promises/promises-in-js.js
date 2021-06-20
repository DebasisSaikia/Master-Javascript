function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 2000);
  });
}

function emailV() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email Verified");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Other Data recieved");
      resolve();
    }, 1000);
  });
}

// callback hell
// register(function () {
//   login(function () {
//     emailV(function () {
//       getData();
//     });
//   });
// });

// register().then(emailV).then(getData); promise based

// async await
async function verified() {
  try {
    await register();
    await login();
    await emailV();
    await getData();
  } catch (err) {
    console.error(err.message);
    throw new Error();
  }
}
verified().then(() => {
  console.log("All set");
});

console.log("run first");
