
function getCookie(cookieName=null) {
    if(cookieName === null){throw new Error("You have not entered a cookieName!")};
    const parsedCookies = parseCookies();
    if(!(cookieName in parsedCookies)) {
        throw new Error("That cookie name doesn't exist!");
    }
    return parsedCookies[cookieName];
}

function setCookie(cookieName, cookieValue, expiryDate=null) {
    if(expiryDate === null) {document.cookie = cookieName + "=" + cookieValue;return;}
    if(!(expiryDate instanceof Date) || isNaN(expiryDate)) {throw new TypeError("You should pass a date object!");}
    if((typeof cookieName !== 'string')) {throw new Error("You should pass a string value for the cookieName!")}
    if((cookieName.length === 0)) {throw new Error("You should not pass an empty string for a cookieName!")}
    let cookieAdded = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue);
    document.cookie =  cookieAdded + "; " + "expires=" + expiryDate.toUTCString() +"; path=/";
}

function deleteCookie(cookieName) {
    const cookies = document.cookie;
    if(cookies.length === 0) {throw new Error("There is No Cookies here!");}
    if(!(hasCookie(cookieName))) {throw new Error("You dont have the cookie: " + cookieName + " in your cookies!")}
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

function allCookieList() {
    return parseCookiesList();
}

function hasCookie(cookieName) {
    const parsedCookies = parseCookies();
    if(!(cookieName in parsedCookies)) {
        return false;
    } 
    return true;
}

function parseCookies() {
    let parsedCookies = {};
    let splitCookies = document.cookie.split(';');
    for(let indx = 0; indx < splitCookies.length; indx++) {
        let trimmedCookie = splitCookies[indx].trim();
        let keyValuePair = trimmedCookie.split("=");
        parsedCookies[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]);
    }
    return parsedCookies;
}

function parseCookiesList() {
    let parsedCookiesList = [];
    let splitCookies = document.cookie.split(';');
    for(let indx = 0; indx < splitCookies.length; indx++) {
        let trimmedCookie = splitCookies[indx].trim();
        parsedCookiesList.push(decodeURIComponent(trimmedCookie));
    }
    return parsedCookiesList;
}