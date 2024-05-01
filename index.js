let cookies = 0;
function addCookie(){
     cookies += 1;
  document.getElementById("cookies").innerHTML = cookies;
};  
function save(){
  var save = {
       cookies:cookies
  }
     localStorage.setItem("save",JSON.stringify(save));
};
function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
     if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
document.getElementById("cookies").innerHTML = cookies;
};


