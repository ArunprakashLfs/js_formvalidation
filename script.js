'use strict'
// get input element
const form = document.getElementById("form");
const userName = document.getElementById("username");
const Email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const small = document.getElementById("outputvalue");
const submit = document.getElementById("submit");


//function


//Event Listner
submit.addEventListener ("submit", function (event) {
    event.preventDefault();
    const userName = userName.value.trim();
    const email = email.value.trim();
    const password = password.value.trim();
    const confirmpassword = confirmpassword.value.trim();
    if (!userName) {
        small.textContent = "enter proper value";
    }else{
        small.textContent = "success";
    }
})