const inputElements = document.querySelectorAll('input');
const inputFname = document.querySelector('input#fname');
const inputLname = document.querySelector('input#lname');
const inputEmail = document.querySelector('input[type="email"]');
const inputTel = document.querySelector('input[type="tel"]');
const inputPwd = document.querySelector('input#pwd');
const inputConfirmPwd = document.querySelector('input#confirm');
const errorElements = document.querySelectorAll('.error');


const fnameRegex = /^[a-zA-Z]{2,32}$/;
const lnameRegex = /^[a-zA-Z]{2,32}$/;
const emailRegex = /^[^\u0040\s]+\u0040[^\u0040.\s]+[.][^.\s\u0040]{2,4}$/;
const telRegex = /^[+]233\s\d{10}$/;
const pwdRegex = /(?=.{8,32})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*/;

const pwdLengthRegex = /.{8,32}/;
const pwdDigitRegex = /[0-9]/;
const pwdSymbolRegex = /[^a-zA-Z0-9]/;
const pwdCapsRegex = /[A-Z]/;
const pwdSmallCapsRegex = /[a-z]/;

// const isValidPwd = pwdLengthRegex.test(inputPwd.value) &&
//                    pwdDigitRegex.test(inputPwd.value)  &&
//                    pwdSymbolRegex.test(inputPwd.value) &&
//                    pwdCapsRegex.test(inputPwd.value)   &&
//                    pwdSmallCapsRegex.test(inputPwd.value);


const allValid = fnameRegex.test(inputFname.value) &&
                 lnameRegex.test(inputLname.value) &&
                 emailRegex.test(inputEmail.value) &&
                 telRegex.test(inputTel.value) &&
                 pwdRegex.test(inputPwd.value) && 
                 inputPwd.value === inputConfirmPwd.value;

   window.addEventListener('load', ()=> {
    inputElements.forEach((inputElement)=>{
       if (inputElement.value.length === 0 || allValid) {
        errorElements.forEach((errorElement)=>  errorElement.setAttribute('style', 'color: #8A4F22; font-weigth: bolder;'));
       } else {
        errorElements.forEach((errorElement)=>  errorElement.setAttribute('style', 'color: red; font-weigth: bolder;'));
       }
    });
   });

   inputFname.addEventListener('input', ()=> {
     if (inputFname.value.length === 0 || fnameRegex.test(inputFname.value)) {
        inputFname.className = 'valid'
        document.querySelector('output.f-error').style.visibility = 'hidden'
     } else {
        inputFname.className = 'invalid'
        document.querySelector('output.f-error').style.visibility = 'visible'
     }
   });

   inputLname.addEventListener('input', ()=>{
    if (inputLname.value.length === 0 || lnameRegex.test(inputLname.value)) {
        inputLname.className = 'valid'
        document.querySelector('output.l-error').style.visibility = 'hidden'
     } else {
        inputLname.className = 'invalid'
        document.querySelector('output.l-error').style.visibility = 'visible'
     }
   });

   inputEmail.addEventListener('input', ()=> {
    if (inputEmail.value.length === 0 || emailRegex.test(inputEmail.value)) {
        inputEmail.className = 'valid'
        document.querySelector('output.e-error').style.visibility = 'hidden'
     } else {
        inputEmail.className = 'invalid'
        document.querySelector('output.e-error').style.visibility = 'visible'
     }
   });

   inputTel.addEventListener('input', ()=> {
    if (inputTel.value.length === 0 || telRegex.test(inputTel.value)) {
        inputTel.className = 'valid'
        document.querySelector('output.t-error').style.visibility = 'hidden'
     } else {
        inputTel.className = 'invalid'
        document.querySelector('output.t-error').style.visibility = 'visible'
     }
   });

   inputPwd.addEventListener('input', ()=>{
    if (inputPwd.value.length === 0 || pwdRegex.test(inputPwd.value)) {
        inputPwd.className = 'valid'
        document.querySelector('output.p-error').style.visibility = 'hidden'
     } else {
        inputPwd.className = 'invalid'
        document.querySelector('output.p-error').style.visibility = 'visible'
     }
   });

   inputConfirmPwd.addEventListener('input', ()=> {
    if (inputPwd.value.length === inputConfirmPwd.value.length){
        inputPwd.className = 'valid';
        inputConfirmPwd.className = 'valid';
        document.querySelector('.pwd-error').textContent = "";
    } else {
        inputPwd.className = 'invalid';
        inputConfirmPwd.className = 'invalid';
        document.querySelector('.pwd-error').textContent = "* Passwords do not match";
        document.querySelector('.pwd-error').style.color = 'red'
    }
   });

   document.forms[0].addEventListener('submit', (e)=> {
        e.preventDefault();
        inputElements.forEach((inputElement)=>{
            if (!allValid && inputElement.value.length === 0){
                inputElement.className = 'invalid';
                errorElements.forEach((errorElement)=>  errorElement.setAttribute('style', 'color: red; font-weigth: bolder; visibility: visible;'));
            } else {
                inputElement.className = 'valid';
                errorElements.forEach((errorElement)=>  errorElement.setAttribute('style', 'visibility: hidden; font-weigth: bolder;'));
            }
        })
   });
   




