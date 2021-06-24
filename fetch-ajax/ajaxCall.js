// function loadData() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = () => {
//     if (xhttp.readyState === 4 && xhttp.status == 200) {
//       document.getElementById("demo").innerHTML = xhttp.responseText;
//       //   console.log(xhttp.responseText);
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//   xhttp.send();
// }

// get method
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//     for (var data in result) {
//       var users = `${result[data].id}`;
//       document.write(users);
//     }
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// post method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
