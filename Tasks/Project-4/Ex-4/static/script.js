function validateStrNotEmpty(str) {
    if (!str.length) {
        alert("Your String is Empty!");
        return false;
    }
    return true;
}

function validateName(userName) {
    if (!/^[A-Za-z ]+$/.test(userName)) {
        alert("Invalid name. Letters only!");
        return false;
    }
    return true;
}

function validatePhoneNumber(phoneNumber) {
    if (!/^\d{8}$/.test(phoneNumber)) {
        alert("Invalid phone number! Must be exactly 8 digits.");
        return false;
    }
    return true;
}

function validateMobileNumber(mobileNumber) {
    if (!/^(010|011|012)\d{8}$/.test(mobileNumber)) {
        alert("Invalid Mobile number!");
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}$/.test(email)) {
        alert("Invalid Email!");
        return false;
    }
    return true;
}

function validateColor(color) {
    if (!/^(red|green|blue)$/i.test(color)) {
        alert("Invalid Color!");
        return false;
    }
    return true;
}

function getUserName() {
    let errFlag, str;
    do {
        str = prompt("Enter your Name :D");
        errFlag = !validateStrNotEmpty(str) || !validateName(str);
    } while (errFlag);

    return str;
}

function getUserPhoneNumber() {
    let errFlag, str;
    do {
        str = prompt("Enter your phonenumber :D");
        errFlag = !validateStrNotEmpty(str) || !validatePhoneNumber(str);
    } while (errFlag);
    return str;
}

function getUserMobileNumber() {
    let errFlag, str;
    do {
        str = prompt("Enter your mobile number :D");
        errFlag = !validateStrNotEmpty(str) || !validateMobileNumber(str);
    } while (errFlag);
    return str;
}

function getUserEmail() {
    let errFlag, str;
    do {
        str = prompt("Enter your Email :D");
        errFlag = !validateStrNotEmpty(str) || !validateEmail(str);
    } while (errFlag);
    return str;
}

function getuUserColorFormate() {
    let errFlag, str;
    do {
        str = prompt("Enter your color formate :D");
        errFlag = !validateStrNotEmpty(str) || !validateColor(str);
    } while (errFlag);
    return str;
}

function display(userName, phoneNumber, mobileNumber, email, colorMode) {
    console.log("%cName: " + userName, "color: " + colorMode + ";");
    console.log("%cPhone: " + phoneNumber, "color: " + colorMode + ";");
    console.log("%cMobile: " + mobileNumber, "color: " + colorMode + ";");
    console.log("%cEmail: " + email, "color: " + colorMode + ";");
}


function runScript() {
    const userName = getUserName();
    const phoneNumber = getUserPhoneNumber();
    const mobileNumber = getUserMobileNumber();
    const email = getUserEmail();
    const colorMode = getuUserColorFormate();
    display(userName, phoneNumber, mobileNumber, email, colorMode);
}

runScript();