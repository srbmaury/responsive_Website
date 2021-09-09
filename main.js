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
var mainPageId = document.getElementById('mainPageId');
var connect = document.getElementById('connect');
var contactId = document.getElementById('contactId');
var details = document.getElementById('details');
var formBodyId = document.getElementById('formBodyId');
var container = document.getElementById('container');
var darkLight = document.getElementById("darkbutton");
function darkmode(){
  
  if(mainPageId.className == "background firstSection") {
    mainPageId.className+=" dark1";
    contactId.className+=" dark1 formborder";
    details.className+=" dark2";
    formBodyId.className+=" dark1";
    darkLight.innerHTML="Light";
    container.className +=" formborder dark2";
    darkLight.src="images/sun-6-64.png";
  }
  else {
    mainPageId.className = "background firstSection";
    contactId.className = "section contactsection";
    details.className = "";
    formBodyId.className = "fffbody";
    darkLight.innerHTML="Dark";
    darkLight.src="images/moon-4-64.png";
    container.className="container";
  }
  if(connect.className=="grad"){
    connect.className = "dark1";
  }
  else{
    connect.className="grad";
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
