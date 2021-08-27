const person = {
  name: "Debasis",
  title: "Saikia",
  age: 24,
};

const butn = document.getElementById("btn");
const setItem = document.getElementById("set");
const getItem = document.getElementById("get");

butn.addEventListener("click", clearLocal);
setItem.addEventListener("click", setLocal);
getItem.addEventListener("click", getLocal);

function clearLocal() {
  localStorage.removeItem("theme");
}
function setLocal() {
  localStorage.setItem("theme", JSON.stringify(person));
}

function getLocal() {
  const item = JSON.parse(localStorage.getItem("theme"));
  console.log(item?.name || "no set");
}
