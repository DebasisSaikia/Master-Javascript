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
  console.log(item?.name || "not set");
}

// local storage
const themeSwitcher = document.querySelector("#themeSwith");

themeSwitcher.addEventListener("change", (e) => {
  const values = e.target.value;
  localStorage.setItem("themes", values );
  if (values === "dark") {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#fff";
  } else if (values === "light") {
    document.body.style.backgroundColor = "#eee";
    document.body.style.color = "#111";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
});
