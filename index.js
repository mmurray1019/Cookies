let cookie = 0;
document.getElementById("cookies").innerHTML = cookie;
function addCookie(){
     cookie += 1;
  document.getElementById("cookies").innerHTML = cookie;
};  
function save(){
  localStorage.setItem("cookies", cookie);
};
function load(){
let cookie = localStorage.cookies;
document.getElementById("cookies").innerHTML = cookie;
};
