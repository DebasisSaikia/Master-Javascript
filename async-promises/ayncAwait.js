console.log("Asynchronous programming");

// callback
// function one(callback) {
//   console.log("step 1 completed");
//   callback();
// }

// one(() => {
//   console.log("Step 2 run");
// });

// cafe example
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const order = (fruit_name, pro_cb) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} is selected`);
    pro_cb();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("production is called");
    setTimeout(() => {
      console.log("Prepared fruits");
    }, 2000);
  }, 0000);
};

order(1, production);
