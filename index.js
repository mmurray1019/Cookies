function addCookie() {
    if(window.localStorage) {
    alert('ls exists');
} else {
    alert('ls does not exist');
}
};

let cookie = 0;
//function addCookie(){
  //   cookie += 1;
  //document.getElementById("cookies").innerHTML = cookie;
//};  
function save(){
  localStorage.setItem("cookies", cookie);
};
function load(){
cookie = localStorage.cookies;
document.getElementById("cookies").innerHTML = cookie;
};
