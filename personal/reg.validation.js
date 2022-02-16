function formValidation() {
    var ufname = document.registration.firstName;
    var lname = document.registration.lastName;
    var uemail = document.registration.email;
    var password = document.registration.password;
    var number = document.registration.number;
   
    

    if (allLetter(ufname, 20)) {
        if (allLetter(lname, 20)) {
            if (ValidateEmail(uemail)) {
                if(password_validation(password, 7, 12)){
                    if (number_validate(number))  {                                                        
                    }
                }
               
           }   
        }
    }
    return false;
}

function allLetter(ufname) {
    var letters = /^[A-Za-z ]+$/;
    if (ufname.value.match(letters)) {
        return true;
    } else {
        alert('First & Last names must have alphabet characters only');
        ufname.focus();
        return false;
    }
}

function allLetter(lname) {
    var letters = /^[A-Za-z ]+$/;
    if (lname.value.match(letters)) {
        return true;
    } else {
        alert('First & Last names must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

// function password_validation(password, mx, my) {
//     var password_len = password.value.length;
//     if (password_len == 0 || password_len >= my || password_len < mx) {
//         alert("Password should not be empty / length be between " + mx + " to " + my);
//         password.focus();
//         return false;
//     }
//     return true;
// }





