const arr=[document.getElementById("main"),
document.getElementById("connect"),
document.getElementById("details"),
document.getElementById("form")]
const arr2=[];
for(var i=0; i<=4; i++){
arr2[i]="mobileview"+i;
}
for(var i=0; i<4; i++) (arr[i]).style.display="none";
(arr[0]).style.display="block";
function myFunction1(){
    for(var i=0; i<4; i++) (arr[i]).style.display="none";
(arr[0]).style.display="block";
}
function myFunction2(){
for(var i=0; i<4; i++) (arr[i]).style.display="none";
(arr[1]).style.display="block";
}
function myFunction3(){
for(var i=0; i<4; i++) (arr[i]).style.display="none";
(arr[2]).style.display="block";
}
function myFunction4(){
for(var i=0; i<4; i++) (arr[i]).style.display="none";
(arr[3]).style.display="block";
}

function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "navbar background2 sticky") {
document.getElementById('ghar').display="none";
x.className += " h-nav-resp";
} else {
x.className = "navbar background2 sticky";
document.getElementById('ghar').display="visible";
}
}
const mq = window.matchMedia( "(min-width: 535px)" );
if (mq.matches) {
var x = document.getElementById("mobileview1");
x.style.display="visible";
}
else{
var x = document.getElementById("ccc");
x.style.dispaly="visible";
}
function realtimeClock(){
var rtClock = new Date();
var hours = rtClock.getHours();
var minutes = rtClock.getMinutes();
var seconds = rtClock.getSeconds();

var amPm = (hours < 12) ? "AM" : "PM";
hours = (hours > 12) ? hours - 12 : hours;
hours = ("0" + hours).slice(-2);
minutes = ("0" + minutes).slice(-2);
seconds = ("0" + seconds).slice(-2);
document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
var t = setTimeout(realtimeClock, 500);

}
var form=document.getElementById('form')

form.addEventListener('submit',function(event){
event.preventDefault()

var name = document.getElementById('name').value
console.log(name)
var username = document.getElementById('username').value
console.log(username)
var email = document.getElementById('email').value
console.log(email)
var number = document.getElementById('number').value
console.log(number)
var password = document.getElementById('password').value
console.log(password)
var apassword = document.getElementById('apassword').value
console.log(apassword)
var gender = ' ';

if(document.getElementById('dot-1').checked){
    gender = "male";
}
else if(document.getElementById('dot-2').checked){
    gender = "female";
}
else if(document.getElementById('dot-3').checked){
    gender = "other";
}
console.log(gender)
if(apassword != password){
  alert("Passwords didn't match\nTry again!");
  console.clear();
}
else if(password.length < 6){
  alert("Password must be atleast 6 characters long");
  console.clear();
}
else{
  alert('Your responses have been submitted. We shall contact you soon.')
}
name.innerHTML="";
})
var faltu1 = document.getElementById('faltu1');
var connect = document.getElementById('connect');
var faltu2 = document.getElementById('faltu2');
var details = document.getElementById('details');
var faltu3 = document.getElementById('faltu3');

var darkLight = document.getElementById("darkbutton");
function darkmode(){
  
  if(faltu1.className == "background firstSection") {
    faltu1.className+=" dark1";
    connect.className+=" dark1";
    faltu2.className+=" dark1";
    details.className+=" dark2";
    faltu3.className+=" dark1";
    darkLight.innerHTML="Light";
    darkLight.src="images/sun-6-64.png";
  }
  else {
    faltu1.className = "background firstSection";
    connect.className = "";
    faltu2.className = "section contactsection";
    details.className = "";
    faltu3.className = "fffbody";
    darkLight.innerHTML="Dark";
    darkLight.src="images/moon-4-64.png";

  }
}

function startDictation() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(e) {
      document.getElementById('search').value = e.results[0][0].transcript;
      recognition.stop();
      document.getElementById('labnol').submit();
    };

    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}
