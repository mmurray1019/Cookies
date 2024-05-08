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
        console.log('must sign up');
    } else {
    if (ImputtedEmail == getInfo.trueEmail && ImputtedPassword == getInfo.truePassword) {
        window.location.href = "http://www.w3schools.com";
        alert("sucess");
        console.log('yay');
      } else {
        alert("Incorrect Password or Username");
        console.log('incorrecty');
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
        console.log('singed_up_sucesful');
       
} 
} else {
    alert("You are already signed up.");
      console.log('already_singed_up');
}
}
