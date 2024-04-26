var cookie = 0;
function addCookie(){
     cookie = cookie + 1;
  document.getElementById("cookies").innerHTML = cookie;
};  
function save(){
  localStorage.setItem("cookies", cookie);
};
document.getElementById("result").innerHTML = localStorage.lastname;
