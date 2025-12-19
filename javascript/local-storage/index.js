localStorage.clear();
localStorage.setItem("Name", "Md Munna");

const data = [{a: "a", h: "b"}, {c: "c"}];

localStorage.setItem("data", JSON.stringify(data));

console.log(localStorage.getItem("data"));

const localdata = JSON.parse(localStorage.getItem("data"));

localdata[0].a = "b";

localStorage.setItem("data", JSON.stringify(localdata));
console.log(localStorage.getItem("data"));


