let cookie = 00;
let cookie = localStorage.cookies;
document.getElementById("cookies").innerHTML = cookie;
function addCookie(){
     cookie += 1;
  document.getElementById("cookies").innerHTML = cookie;
};  
function save(){
  localStorage.setItem("cookies", cookie);
     alert("Saved your ", cookie, " cookies");
};
function load(){
let cookie = localStorage.cookies;
document.getElementById("cookies").innerHTML = cookie;
};
