let firstName = document.querySelector('.firstname');
let lastName = document.querySelector('.lastname');
let phone = document.querySelector('.phone');
let age = document.querySelector('.age');
let myimge= document.querySelector('.myimg');

fetch("http://localhost:3002/myProfile")
.then(profile => profile.json())
.then(profileJSON => display(profileJSON));

function display(content){
    firstName.innerHTML = content.firstname;
    lastName.innerHTML = content.lastname;
    age.innerHTML = content.age;
    phone.innerHTML = content.phone
    myimge.src = "/img/img.PNG"
}