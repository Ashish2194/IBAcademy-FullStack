(function(){
/*Get hold of the password field */
 let passId = document.getElementById("password");
 let passErrorId1 = document.getElementById("passError1");
 let passErrorId2 = document.getElementById("passError2");
 let passErrorId3 = document.getElementById("passError3");
 let passErrorId4 = document.getElementById("passError4");
 let logIn = document.getElementById("logIn");
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
      alert("Login Functionality to be implemented sooon. Stay Tuned!");
    else
        alert("Check the errors and try again!!!");
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
}
/*Main Function to initialize everything */
 function main() {
    commonUtil = new CommonUtils();
    // eventListeners();
  }
  main();
})();