'use strict'

//getting input from html
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const confirmpasswordEl = document.getElementById("confirmpassword");
const emailEl = document.getElementById("email");

//functions
//error function
const errorFunction = (element, message) => {
    let formControl = element.parentElement;
    // console.log(formControl);
    formControl.className = "form-control error";
    let small = formControl.querySelector(".small");
    // console.log(small);
    small.innerText = `${message} is invalid!`;
  };
  
  //success function
  const successFunction = (element) => {
    let formControl = element.parentElement;
    formControl.className = "form-control success";
  };

//Event listners
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = usernameEl.value.trim();
    let email = emailEl.value.trim();
    let password = passwordEl.value.trim();
    let confirmpassword = confirmpasswordEl.value.trim();

    checkRequired(input);
    if (userName) {
        successFunction(usernameEl);
      } else {
        errorFunction(usernameEl, "Username");
      }
      if (email) {
        successFunction(emailEl);
      } else {
        errorFunction(emailEl, "E-mail");
      }
      if (password) {
        successFunction(passwordEl);
      } else {
        errorFunction(passwordEl, "Password");
      }
      if (confirmpassword) {
        //password === confirm password
        if (password === confirmpassword) {
          successFunction(confirmpasswordEl);
        } else {
          errorFunction(
            confirmpasswordEl,
            "confirm-password not matched to previous one so it"
          );
        }
      } else {
        errorFunction(confirmpasswordEl, "Confirm Password");
      }
    
      // console.log(userName);
      // console.log(email);
      // console.log(password);
      // console.log(confirmPassword);
    });