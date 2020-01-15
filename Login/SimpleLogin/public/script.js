(function(){
/*Get hold of the password field */
 let passId = document.getElementById("password");
 let passErrorId1 = document.getElementById("passError1");
 let passErrorId2 = document.getElementById("passError2");
 let passErrorId3 = document.getElementById("passError3");
 let passErrorId4 = document.getElementById("passError4");
 let logIn = document.getElementById("logIn");
 let signUp = document.getElementById("signUp");
 let logInTab = document.getElementById("logInTab");
 let signUpTab = document.getElementById("signUpTab");
 let signUpForm = document.getElementById("signUpForm");
 let loginForm = document.getElementById("loginForm");
 let forgotPass = document.getElementById("forgotPass");
 let passwrd = document.getElementById("passwrd");
 let rePass = document.getElementById('rePasswrd');
 let passErrorId5 = document.getElementById("passError5");
 let passErrorId6 = document.getElementById("passError6");
 let passErrorId7 = document.getElementById("passError7");
 let passErrorId8 = document.getElementById("passError8");
 let rePassError = document.getElementById("rePassError");
 let commonUtil;

 /*Utility class for commonly performed operations */
class CommonUtils {
    addClass(el, className) {
        el.classList.add(className);
    }
    removeClass(el, className) {
        el.classList.remove(className)
    }
    addEvent(el, event, callback) {
        el.addEventListener(event, callback);
    }
}
function eventListeners () {
    // commonUtil.addEvent(passId, 'keyup', keyUp);
    // commonUtil.addEvent(passId, 'focus', focusC);
    // commonUtil.addEvent(passId, 'blur', blurC)
}
/*Just need to check the password validations since required field is already handled */
// let keyUp = function () {
//     let validateInput = new ValidateUserInput();
//     validateInput.checkUserInput();
// }
/*Login Click */
logIn.addEventListener('click', function (event) {
    event.preventDefault();
    let validateInput = new ValidateUserInput();
    if(validateInput.checkUserInput())
      window.location.href=window.location.origin+"/users";
    else
        alert("Check the errors and try again!!!");
});

signUp.addEventListener('click', function (event) {
    event.preventDefault();
    let validateInput = new ValidateUserInput();
    if(validateInput.checkNewUserInput())
      window.location.href=window.location.origin+"/users";
    else
        alert("Check the errors and try again!!!");
});

signUpTab.addEventListener('click',function (param) {
    commonUtil.removeClass(logInTab,'active');
    commonUtil.removeClass(signUpTab,'inactive');
    commonUtil.removeClass(signUpTab,'underlineHover');
    commonUtil.removeClass(loginForm,'showLogin');
    commonUtil.removeClass(signUpForm,'hideSignUp');
    commonUtil.removeClass(forgotPass, 'underlineHover');
    commonUtil.addClass(logInTab,'inactive'); 
    commonUtil.addClass(logInTab,'underlineHover'); 
    commonUtil.addClass(signUpTab,'active');
    commonUtil.addClass(loginForm,'hideSignUp');
    commonUtil.addClass(signUpForm,'showLogin');
    commonUtil.addClass(forgotPass, 'hidePassword');
});

logInTab.addEventListener('click',function (param) {    
    commonUtil.removeClass(logInTab,'inactive'); 
    commonUtil.removeClass(logInTab,'underlineHover');  
    commonUtil.removeClass(signUpTab,'active');
    commonUtil.removeClass(loginForm,'hideSignUp');
    commonUtil.removeClass(signUpForm,'showLogin');
    commonUtil.removeClass(forgotPass, 'hidePassword');
    commonUtil.addClass(logInTab,'active');        
    commonUtil.addClass(signUpTab,'inactive');
    commonUtil.addClass(signUpTab,'underlineHover');  
    commonUtil.addClass(loginForm,'showLogin');    
    commonUtil.addClass(signUpForm,'hideSignUp');
    commonUtil.addClass(forgotPass, 'underlineHover');
});
class ValidateUserInput {
    checkUserInput() {
        /*Check input length */
        let passLenFlag = passId.value && passId.value.length >= 8 ? true: false;
        let passSmallFlag = passId.value && passId.value.match(/[a-z]/g) ? true: false;
        let passCapFlag = passId.value && passId.value.match(/[A-Z]/g) ? true: false;
        let passNumFlag = passId.value && passId.value.match(/[0-9]/g) ? true: false;
        
        if(passLenFlag && passSmallFlag && passCapFlag && passNumFlag){
            commonUtil.removeClass(passErrorId1, "password-error-show");
            commonUtil.addClass(passErrorId1, "password-error-hidden");
            commonUtil.removeClass(passErrorId2, "password-error-show");
            commonUtil.addClass(passErrorId2, "password-error-hidden");
            commonUtil.removeClass(passErrorId3, "password-error-show");
            commonUtil.addClass(passErrorId3, "password-error-hidden");
            commonUtil.removeClass(passErrorId4, "password-error-show");
            commonUtil.addClass(passErrorId4, "password-error-hidden");
            return true; // All valid
        } else {
            if(passLenFlag) {
                commonUtil.removeClass(passErrorId1, "password-error-show");
                commonUtil.addClass(passErrorId1, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId1, "password-error-hidden");
                commonUtil.addClass(passErrorId1, "password-error-show");
            }
            if(passCapFlag) {
                commonUtil.removeClass(passErrorId2, "password-error-show");
                commonUtil.addClass(passErrorId2, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId2, "password-error-hidden");
                commonUtil.addClass(passErrorId2, "password-error-show");
            }
            if(passSmallFlag) {
                commonUtil.removeClass(passErrorId3, "password-error-show");
                commonUtil.addClass(passErrorId3, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId3, "password-error-hidden");
                commonUtil.addClass(passErrorId3, "password-error-show");
            }
            if(passNumFlag) {
                commonUtil.removeClass(passErrorId4, "password-error-show");
                commonUtil.addClass(passErrorId4, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId4, "password-error-hidden");
                commonUtil.addClass(passErrorId4, "password-error-show");
            }
            return false; // Not valid
        }     
    }
    checkNewUserInput() {
        /*Check input length */
        let passLenFlag = passwrd.value && passwrd.value.length >= 8 ? true: false;
        let passSmallFlag = passwrd.value && passwrd.value.match(/[a-z]/g) ? true: false;
        let passCapFlag = passwrd.value && passwrd.value.match(/[A-Z]/g) ? true: false;
        let passNumFlag = passwrd.value && passwrd.value.match(/[0-9]/g) ? true: false;
        let passMatch = passwrd.value === rePass.value;
        
        if(passLenFlag && passSmallFlag && passCapFlag && passNumFlag && passMatch){
            commonUtil.removeClass(passErrorId5, "password-error-show");
            commonUtil.addClass(passErrorId5, "password-error-hidden");
            commonUtil.removeClass(passErrorId6, "password-error-show");
            commonUtil.addClass(passErrorId6, "password-error-hidden");
            commonUtil.removeClass(passErrorId7, "password-error-show");
            commonUtil.addClass(passErrorId7, "password-error-hidden");
            commonUtil.removeClass(passErrorId8, "password-error-show");
            commonUtil.addClass(passErrorId8, "password-error-hidden");
            commonUtil.removeClass(rePassError, "password-error-show");
            commonUtil.addClass(rePassError, "password-error-hidden");
            return true; // All valid
        } else {
            if(passLenFlag) {
                commonUtil.removeClass(passErrorId5, "password-error-show");
                commonUtil.addClass(passErrorId5, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId5, "password-error-hidden");
                commonUtil.addClass(passErrorId5, "password-error-show");
            }
            if(passCapFlag) {
                commonUtil.removeClass(passErrorId6, "password-error-show");
                commonUtil.addClass(passErrorId6, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId6, "password-error-hidden");
                commonUtil.addClass(passErrorId6, "password-error-show");
            }
            if(passSmallFlag) {
                commonUtil.removeClass(passErrorId7, "password-error-show");
                commonUtil.addClass(passErrorId7, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId7, "password-error-hidden");
                commonUtil.addClass(passErrorId7, "password-error-show");
            }
            if(passNumFlag) {
                commonUtil.removeClass(passErrorId8, "password-error-show");
                commonUtil.addClass(passErrorId8, "password-error-hidden");
            } else {
                commonUtil.removeClass(passErrorId8, "password-error-hidden");
                commonUtil.addClass(passErrorId8, "password-error-show");
            }
            if(passMatch) {
                commonUtil.removeClass(rePassError, "password-error-show");
                commonUtil.addClass(rePassError, "password-error-hidden");
            } else {
                commonUtil.removeClass(rePassError, "password-error-hidden");
                commonUtil.addClass(rePassError, "password-error-show");
            }
            return false; // Not valid
        }     
    }
}
/*Main Function to initialize everything */
 function main() {
    commonUtil = new CommonUtils();
    // eventListeners();
  }
  main();
})();