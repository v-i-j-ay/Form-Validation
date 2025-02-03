const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const phonenumber = document.getElementById("phonenumber");
const tandc = document.getElementById("tc");
const tandcError = document.getElementById("tc-error");

var isvalidname = false;
var isvalidemail = false;
var isvalidpassword = false;
var isvalidcpassword = false;
var isvalidphonenumber = false;
var isvalidtandc = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

function validate() {
    let namevalue = uname.value.trim();
    let emailvalue = email.value.trim();
    let passwordvalue = password.value.trim();
    let cpasswordvalue = cpassword.value.trim();
    let phonenumbervalue = phonenumber.value.trim();

    isvalidname = false;
    isvalidemail = false;
    isvalidpassword = false;
    isvalidcpassword = false;
    isvalidphonenumber = false;
    isvalidtandc = false;

    // Username validation
    if (namevalue === "") {
        seterror(uname, "Username cannot be empty");
    } else {
        setsuccess(uname);
        isvalidname = true;
    }

    // Email validation
    if (emailvalue === "") {
        seterror(email, "Email cannot be empty");
    } else if (!emailCheck(emailvalue)) {
        seterror(email, "Enter a valid email");
    } else {
        setsuccess(email);
        isvalidemail = true;
    }

    // Password validation
    if (passwordvalue === "") {
        seterror(password, "Password cannot be empty");
    } else if (passwordvalue.length < 6) {
        seterror(password, "Password must be at least 6 characters");
    } else {
        setsuccess(password);
        isvalidpassword = true;
    }

    // Confirm password validation
    if (cpasswordvalue === "") {
        seterror(cpassword, "Confirm Password cannot be empty");
    } else if (cpasswordvalue !== passwordvalue) {
        seterror(cpassword, "Passwords must match");
    } else {
        setsuccess(cpassword);
        isvalidcpassword = true;
    }

    // Phone number validation
    if (phonenumbervalue === "") {
        seterror(phonenumber, "Phone number cannot be empty");
    } else if (!/^\d{10}$/.test(phonenumbervalue)) {
        seterror(phonenumber, "Phone number must be exactly 10 digits");
    } else {
        setsuccess(phonenumber);
        isvalidphonenumber = true;
    }

    // Terms & Conditions validation
    if (!tandc.checked) {
        tandcError.innerText = "You must agree to the terms";
        tandcError.classList.remove("hidden");
        isvalidtandc = false;
    } else {
        tandcError.innerText = "";
        tandcError.classList.add("hidden");
        isvalidtandc = true;
    }

    // Submit form if all fields are valid
    if (
        isvalidname &&
        isvalidemail &&
        isvalidpassword &&
        isvalidcpassword &&
        isvalidphonenumber &&
        isvalidtandc
    ) {
        alert("Form submitted successfully!");
        form.submit();
    }
}

function seterror(input, message) {
    let small = input.nextElementSibling; // Target the <small> element next to the input
    small.innerText = message;
    input.classList.add("border-red-500"); // Add red border for error
    input.classList.remove("border-green-500"); // Remove green border if exists
}

function setsuccess(input) {
    let small = input.nextElementSibling; // Target the <small> element next to the input
    small.innerText = "";
    input.classList.add("border-green-500"); // Add green border for success
    input.classList.remove("border-red-500"); // Remove red border if exists
}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailReg.test(input);
}
