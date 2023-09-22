console.log("welcome to my to do list");
const tasklist = document.getElementById("tasklist");
const ip = document.getElementById("ipbox");
const add = document.getElementById("add");
const savedata = () => {
  localStorage.setItem("data", tasklist.innerHTML);
};
const getdata = () => {
  tasklist.innerHTML = localStorage.getItem("data");
};
add.addEventListener("click", () => {
  console.log("it is working");
  if (ip.value === "") {
    alert("You must enter your goal...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = ip.value;
    tasklist.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  ip.value = "";
  savedata();
});
tasklist.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
getdata();
