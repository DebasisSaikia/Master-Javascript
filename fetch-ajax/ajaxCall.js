console.log("Ajax tutorial");

function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
      //   console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}
