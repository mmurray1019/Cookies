let cookie = 0;

function addCookie(){
     cookie += 1;
  document.getElementById("cookies").innerHTML = cookie;
};  
function save(){
  localStorage.setItem("cookies", cookie);
};
function load(){
let cookie = Number(localStorage.cookies);
document.getElementById("cookies").innerHTML = cookie;
};
