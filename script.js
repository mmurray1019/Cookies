const signUpButton = document.getElementById('signUp'); 
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
}); 


function login(){
    var ImputtedEmail = document.getElementById('email').value
    var ImputtedPassword = document.getElementById('password').value
    var getInfo = JSON.parse(localStorage.getItem("LoginInfo"));
    
    if (getInfo.trueEmail == null || getInfo.truePassword == null) {
        alert("sign up you idiot");
    } else {
    if (ImputtedEmail == getInfo.trueEmail && ImputtedPassword == getInfo.truePassword) {
        window.location.href = "http://www.w3schools.com";
        alert("sucess");
      } else {
        alert("Incorrect Password or Username");
        window.location.href = "http://github.com";
      }
    }

}
//


     
//
function SignUp(){
    if (typeof getInfo.trueEmail !== "undefined"){
    if (typeof getInfo.truePassword !== "undefined"){
var LoginInfo = {
    trueEmail:SignupEmail,
    truePassword:SignupPassword
};
  localStorage.setItem("LoginInfo",JSON.stringify(LoginInfo));
        window.location.href = "https://start.oldtrail.org/";
} 
} else {
    alert("You are already signed up.");
        window.location.href = "https://oldtrail.myschoolapp.com/app/student#studentmyday/assignment-center";
}
}
